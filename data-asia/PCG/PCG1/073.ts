import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Porygon",
         ja: "ポリゴン",
         fr: "Purygon",
         de: "Porygon",
         es: "Fisgón",
         it: "Porygon",
         pt: "Porygon",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [137],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Data Retrieval",
            ja: "データ取得",
            fr: "Récupération des données",
            de: "Datenabruf",
            es: "Recuperación de datos",
            it: "Recupero dei dati",
            pt: "Recuperação de dados",
          },
          effect: {
            en: "If you have less than 4 cards in your hand, draw cards until you have 4 cards in your hand.",
            ja: "手に4枚未満のカードがある場合は、手に4枚のカードがあるまでカードを描画します。",
            fr: "Si vous avez moins de 4 cartes dans votre main, dessinez des cartes jusqu'à ce que vous ayez 4 cartes à la main.",
            de: "Wenn Sie weniger als 4 Karten in der Hand haben, zeichnen Sie Karten, bis Sie 4 Karten in der Hand haben.",
            es: "Si tiene menos de 4 cartas en su mano, dibuje cartas hasta que tenga 4 cartas en la mano.",
            it: "Se hai meno di 4 carte in mano, disegna le carte fino a quando non hai 4 carte in mano.",
            pt: "Se você tiver menos de 4 cartas na mão, desenhe cartas até ter 4 cartas na mão.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Confuse Ray",
            ja: "レイを混乱させます",
            fr: "Confondre Ray",
            de: "Verwirrung Ray",
            es: "Confundir a ray",
            it: "Confondere il raggio",
            pt: "Confunda Ray",
          },
          effect: {
            en: "The Defending Pokemon is now Confused.",
            ja: "防御ポケモンは今混乱しています。",
            fr: "Le Pokémon en défense est maintenant confus.",
            de: "Das verteidigende Pokemon ist jetzt verwirrt.",
            es: "El Pokémon defensor ahora está confundido.",
            it: "Il Pokemon in carica è ora confuso.",
            pt: "O Pokemon atual agora está confuso.",
          },
          damage: 10,
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
