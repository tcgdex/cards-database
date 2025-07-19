import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Rayquaza (Delta Species)",
         ja: "レイカザ（デルタ種）",
         fr: "Rayquaza (espèce delta)",
         de: "Rayquaza (Delta -Arten)",
         es: "Rayquaza (especie delta)",
         it: "Rayquaza (Delta Species)",
         pt: "Rayquaza (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [384.1],
      hp: 80,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Hydro Barrier",
            ja: "ハイドロバリア",
            fr: "Barrière hydroélectrique",
            de: "Hydro -Barriere",
            es: "Barrera hidroeléctrica",
            it: "Barriera idroelettrica",
            pt: "Barreira hidrelétrica",
          },
          effect: {
            en: "As long as Rayquaza has any Holon Energy cards attached to it, each of your Water PokÃ©mon has no Weakness.",
            ja: "RayquazaにHolon Energy Cardsが付いている限り、それぞれのWaterPokã©Monには弱点はありません。",
            fr: "Tant que Rayquaza a des cartes d'énergie Holon qui y sont attachées, chacun de votre eau Pokã © Mon n'a aucune faiblesse.",
            de: "Solange Rayquaza irgendwelche Holon -Energiekarten befestigt hat, hat jedes Ihrer Wasserpoké Mon keine Schwäche.",
            es: "Mientras Rayquaza tenga tarjetas de energía Holon unidas, cada una de sus agua Poké Mon no tiene debilidad.",
            it: "Finché Rayquaza ha le carte di energia holon attaccate ad esso, ognuna delle tue acque poké mon non ha debolezza.",
            pt: "Enquanto Rayquaza possui cartas de energia de Holon anexadas a ele, cada uma delas de água não tem fraqueza.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Delta Search",
            ja: "デルタ検索",
            fr: "Recherche delta",
            de: "Delta -Suche",
            es: "Búsqueda delta",
            it: "Ricerca delta",
            pt: "Pesquisa Delta",
          },
          effect: {
            en: "Search your deck for a Holon Energy card and attach it to Rayquaza. Shuffle your deck afterward.",
            ja: "デッキを検索してホロンエネルギーカードを探して、レイカザに添付してください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte Holon Energy et attachez-la à Rayquaza. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Holon -Energiekarte und befestigen Sie sie an Rayquaza. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía Holon y adjuntarla a Rayquaza. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta di energia holon e attaccalo a Rayquaza. Shuffle il tuo mazzo in seguito.",
            pt: "Procure seu baralho em busca de um cartão de energia Holon e anexe -o a Rayquaza. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Water", "Metal", "Colorless", "Colorless"],
          name: {
            en: "Ozone Flare",
            ja: "オゾンフレア",
            fr: "Flare d'ozone",
            de: "Ozonflackern",
            es: "Bengala de ozono",
            it: "Flare di ozono",
            pt: "Ozônio Flare",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
