import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Electrode",
         ja: "電極",
         fr: "Électrode",
         de: "Elektrode",
         es: "Electrodo",
         it: "Elettrodo",
         pt: "Eletrodo",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [101],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Lightning"],
          name: {
            en: "Sonicboom",
            ja: "Sonicboom",
            fr: "Sonicboom",
            de: "Sonicboom",
            es: "Sonicboom",
            it: "Sonicboom",
            pt: "Sonicboom",
          },
          effect: {
            en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
            ja: "この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
            fr: "N'appliquez pas la faiblesse et la résistance pour cette attaque. (Tout autre effet qui se produirait après avoir appliqué une faiblesse et une résistance se produit.)",
            de: "Wenden Sie keine Schwäche und Widerstand für diesen Angriff an. (Alle anderen Effekte, die nach der Anwendung von Schwächen und Widerstand auftreten würden.)",
            es: "No aplique debilidad y resistencia para este ataque. (Cualquier otro efecto que suceda después de aplicar debilidad y resistencia aún ocurre).",
            it: "Non applicare debolezza e resistenza per questo attacco. (Qualsiasi altro effetto che si verificherebbe dopo aver applicato la debolezza e la resistenza.)",
            pt: "Não aplique fraqueza e resistência a este ataque. (Quaisquer outros efeitos que aconteceriam após aplicar fraqueza e resistência ainda acontecem.)",
          },
          damage: 30,
        },
        {
          cost: ["Lightning", "Lightning", "Lightning"],
          name: {
            en: "Energy Spike",
            ja: "エネルギースパイク",
            fr: "Pic d'énergie",
            de: "Energiespitze",
            es: "Pico de energía",
            it: "Picco di energia",
            pt: "Pico de energia",
          },
          effect: {
            en: "Search your deck for a basic Energy card and attach it to 1 of your Pokemon. Shuffle your deck afterward.",
            ja: "デッキを検索して、基本的なエネルギーカードを検索し、ポケモンの1枚に添付してください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte d'énergie de base et fixez-la à 1 de votre Pokémon. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer grundlegenden Energiekarte und fügen Sie es an 1 Ihres Pokémon. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía básica y adjunte a 1 de su Pokémon. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una scheda energetica di base e collegala a 1 del tuo Pokemon. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de um cartão de energia básico e anexe -o a 1 do seu Pokemon. Afaste seu baralho depois.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
