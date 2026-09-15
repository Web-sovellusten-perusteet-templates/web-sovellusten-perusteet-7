# W4L1 – React: verkkokaupan tuotelistaus

## Tavoite

Rakenna verkkokaupan sivu, jolla on kaksi tuotekategoriaa: **Kuulokkeet** ja **Kamerat**. Tee kummastakin oma React-komponentti. Kumpikin komponentti näyttää kolme tuotetta HTML-taulukossa.

Harjoittelet:

- komponentin luomista, exporttaamista, importtaamista ja käyttämistä
- staattisen JSX:n kirjoittamista
- JavaScript-muuttujien näyttämistä JSX:n aaltosulkeissa
- yhteenlaskua komponentin sisällä
- tämän päivän hakemista JavaScriptin `Date`-luokalla.


## Käynnistä projekti

Avaa terminaali projektin hakemistoon ja suorita:

```bash
npm install
npm run dev
```

Avaa terminaalin ilmoittama paikallinen osoite selaimessa. Alussa sivulla näkyy vain verkkokaupan otsikko. Tämä on tarkoituksellista: molempien kategoriakomponenttien luominen on sinun tehtäväsi.

## Tehtävä 1 – Luo Kuulokkeet-komponentti

Luo tiedosto `src/components/Kuulokkeet.jsx`. Luo siihen `Kuulokkeet`-niminen komponentti ja vie se tiedostosta `export default` -komennolla.

Komponentin tulee palauttaa yksi `<section>`-elementti, jonka sisällä on:

- `<h2>`-otsikko `Kuulokkeet`
- taulukko, jossa on alla olevat tuotteet.

| Nimi | Hinta | Varastossa |
| --- | --- | --- |
| Langattomat kuulokkeet | 129.90 € | 5 |
| Nappikuulokkeet | 49.90 € | 8 |
| Pelikuulokkeet | 79.90 € | 3 |

Käytä HTML-taulukon rakennetta. Tässä yhden rivin rakenne-esimerkki eri tuotteella:

```jsx
<table>
  <thead>
    <tr>
      <th>Nimi</th>
      <th>Hinta</th>
      <th>Varastossa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kaiutin</td>
      <td>39.90 €</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
```

`tr` tarkoittaa riviä, `th` otsikkosolua ja `td` tietosolua. Kirjoita omaan taulukkoosi kolme tuoteriviä. Hinnat saa kirjoittaa suoraan tekstinä yllä olevassa muodossa.

Avaa `src/App.jsx`. Importtaa komponenttisi ja käytä sitä sivun otsikon jälkeen muodossa `<Kuulokkeet />`.

**Tarkista selaimessa:** sivulla näkyvät Kuulokkeet-otsikko ja kolme kuuloketta.

## Tehtävä 2 – Laske varastomäärien summa

Tee `Kuulokkeet`-funktion sisälle ennen `return`-lausetta kolme muuttujaa tuotteiden varastomäärille. Käytä lukuarvoja `5`, `8` ja `3` ilman lainausmerkkejä.

Laske neljänteen muuttujaan näiden kolmen muuttujan summa `+`-operaattorilla. Näytä samat varastomäärämuuttujat taulukon Varastossa-sarakkeessa JSX:n aaltosulkeilla.

Esimerkki muuttujien käytöstä eri tilanteessa:

```jsx
const punaiset = 2;
const siniset = 4;
const yhteensa = punaiset + siniset;

// Palautettavan JSX:n sisällä:
<p>Palloja yhteensä: {yhteensa} kpl</p>
```

Aaltosulkeissa oleva JavaScript-muuttuja korvautuu sivulla sen arvolla.

Lisää taulukon jälkeen kappale, joka näyttää:

```text
Varastossa yhteensä: 16 kpl
```

**Summan pitää syntyä komponentin sisällä laskemalla varastomäärämuuttujat yhteen.** Älä kirjoita lukua `16` suoraan JSX:ään tai anna sitä summamuuttujan kiinteäksi arvoksi. Summa tarkoittaa varastossa olevien kappaleiden määrää, ei tuoterivien lukumäärää tai hintojen summaa.

**Tarkista laskenta:** vaihda ensimmäinen määrä hetkeksi arvosta `5` arvoon `6`. Sekä taulukon luvun että yhteismäärän pitää päivittyä yhdellä muutoksella. Palauta lopuksi määrä arvoon `5`.

## Tehtävä 3 – Näytä varastosaldon päivämäärä

Hae tämän päivän päivämäärä komponentin sisällä ennen `return`-lausetta:

```js
const tanaan = new Date();
const paivamaara = tanaan.toLocaleDateString('fi-FI');
```

`new Date()` luo nykyistä ajanhetkeä kuvaavan olion. `toLocaleDateString('fi-FI')` muotoilee siitä suomalaisen päivämäärätekstin.

Näytä otsikon ja taulukon välissä kappale muodossa:

```jsx
<p>Varastosaldo tarkistettu: {paivamaara}</p>
```

Päivämäärä tarkoittaa tässä harjoituksessa varastosaldon tarkistuspäivää. Sen pitää tulla suoritushetken päivämäärästä, ei käsin kirjoitetusta päivämäärästä. Varastomäärät ovat edelleen harjoituksen esimerkkilukuja.

**Tarkista selaimessa:** näkyvissä on tämän päivän päivämäärä. Riittää, että päivä on oikein sivua avattaessa tai päivitettäessä; ajastinta ei tarvita.

## Tehtävä 4 – Luo Kamerat-komponentti

Luo tiedosto `src/components/Kamerat.jsx` ja siihen `Kamerat`-niminen komponentti. Voit käyttää oman Kuulokkeet-komponenttisi rakennetta apuna.

Komponentin tulee palauttaa oma `<section>`, jonka sisällä ovat:

- `<h2>`-otsikko `Kamerat`
- `Date`-luokalla haettu päivämäärä samalla tekstillä kuin kuulokkeissa
- taulukko alla olevista kolmesta kamerasta
- komponentin sisällä laskettu varastomäärien summa.

| Nimi | Hinta | Varastossa |
| --- | --- | --- |
| Järjestelmäkamera | 599.00 € | 2 |
| Kompaktikamera | 249.00 € | 4 |
| Toimintakamera | 199.00 € | 6 |

Yhteismäärän tulee näkyä muodossa `Varastossa yhteensä: 12 kpl`.

Määrittele kameroiden määrät, summa ja päivämäärä Kamerat-komponentin sisällä. Kumpikin komponentti huolehtii omista tiedoistaan. Komponenteille ei anneta tietoja propseina.

Importtaa Kamerat-komponentti `App.jsx`-tiedostoon ja käytä sitä Kuulokkeet-komponentin jälkeen muodossa `<Kamerat />`.

Valmis komponenttirakenne on:

```text
App
├── Kuulokkeet
└── Kamerat
```

## Tarkista valmis sovellus

- Sivulla on kaksi kategoriakomponenttia ja kummassakin kolme tuotetta.
- Molempien taulukoiden sarakkeet ovat `Nimi`, `Hinta` ja `Varastossa`.
- Tuoterivit on kirjoitettu erikseen staattisena JSX:nä.
- Varastomäärät tulevat komponentin omista lukumuuttujista.
- Kumpikin yhteismäärä lasketaan näistä samoista muuttujista.
- Kumpikin komponentti näyttää tämän päivän `Date`-luokan avulla.
- Molemmat komponentit on luotu omiin tiedostoihinsa ja otettu käyttöön Appissa.

## Testit

Avaa tarvittaessa toinen terminaali projektin hakemistoon ja suorita:

```bash
npm test
```

Keskeneräisessä harjoituksessa osa testeistä epäonnistuu. Se on odotettua. Lue epäonnistuneen testin nimestä, mitä sivulta vielä puuttuu. Kaikkien testien tulee mennä läpi ennen palautusta.

Testit tarkistavat otsikot, taulukoiden tuotteet, varastomäärät, yhteismäärät ja päivämäärän kahdella eri testipäivällä. Käytä ohjeen mukaisia nimiä, hintoja ja tekstejä, jotta testit tunnistavat ne.

Testit eivät yksin todista, että summa on laskettu muuttujista tai rakenne tehty ilman propseja ja `.map()`-metodia. Nämä tarkistetaan myös koodista. Tee tehtävän 2 määränmuutoskokeilu kummallekin kategorialle ja palauta sen jälkeen alkuperäiset määrät.

## Pohdi lopuksi

1. Miten otit itse luomasi komponentin käyttöön Appissa?
2. Miksi muuttujan ympärille tarvitaan aaltosulkeet JSX:ssä?
3. Miksi laskettu summa on parempi kuin suoraan kirjoitettu yhteismäärä?

## Palautus Classroom50:ssä

Tee muutokset omaan tehtävärepositoryysi ja puske valmis ratkaisu GitHubiin.

```bash
git add .
git commit -m "Valmis W4L1 React-harjoitus"
git push
```

Varmista GitHubista, että viimeisin commit näkyy repositoriossa ja automaattiset testit menevät läpi.
