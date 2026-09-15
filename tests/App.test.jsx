import { render, screen, within, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import App from '../src/App.jsx';

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

const categories = [
  {
    name: 'Kuulokkeet',
    total: 16,
    rows: [
      ['Langattomat kuulokkeet', '129.90 €', '5'],
      ['Nappikuulokkeet', '49.90 €', '8'],
      ['Pelikuulokkeet', '79.90 €', '3'],
    ],
  },
  {
    name: 'Kamerat',
    total: 12,
    rows: [
      ['Järjestelmäkamera', '599.00 €', '2'],
      ['Kompaktikamera', '249.00 €', '4'],
      ['Toimintakamera', '199.00 €', '6'],
    ],
  },
];

function getCategory(name) {
  const heading = screen.getByRole('heading', { name, level: 2 });
  const section = heading.closest('section');
  expect(section, 'Kategoriakomponentin ulomman elementin tulee olla section').not.toBeNull();
  return within(section);
}

describe('Tuotelistaus', () => {
  it('näyttää sovelluksen otsikon', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Verkkokaupan tuotekatalogi' })).toBeInTheDocument();
  });

  for (const category of categories) {
    it(`${category.name}: näyttää taulukossa kolme tuotetta hintoineen ja varastomäärineen`, () => {
      render(<App />);
      const table = getCategory(category.name).getByRole('table');
      const headers = within(table).getAllByRole('columnheader');
      expect(headers.map((cell) => cell.textContent.trim())).toEqual(['Nimi', 'Hinta', 'Varastossa']);
      const rows = within(table).getAllByRole('row');
      expect(rows).toHaveLength(4);
      category.rows.forEach((expected, index) => {
        const cells = within(rows[index + 1]).getAllByRole('cell');
        expect(cells.map((cell) => cell.textContent.trim())).toEqual(expected);
      });
    });

    it(`${category.name}: näyttää varastomäärien yhteissumman`, () => {
      render(<App />);
      expect(getCategory(category.name).getByText(`Varastossa yhteensä: ${category.total} kpl`)).toBeInTheDocument();
    });

    it.each([[2026, 8, 15], [2027, 0, 2]])(
      `${category.name}: näyttää suorituspäivän Date-luokasta (%i, kuukausi-indeksi %i, päivä %i)`,
      (year, month, day) => {
        vi.useFakeTimers({ toFake: ['Date'] });
        const date = new Date(year, month, day, 12);
        vi.setSystemTime(date);
        render(<App />);
        expect(getCategory(category.name).getByText(
          `Varastosaldo tarkistettu: ${date.toLocaleDateString('fi-FI')}`,
        )).toBeInTheDocument();
      },
    );
  }
});
