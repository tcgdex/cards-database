import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Bulbasaur",
         ja: "ブルバサウルス",
         fr: "Bulbasaur",
         de: "Bulbasaur",
         es: "Bulbasaurio",
         it: "Bulbasaur",
         pt: "Bulbasaur",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [1],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Growth",
            ja: "成長",
            fr: "Croissance",
            de: "Wachstum",
            es: "Crecimiento",
            it: "Crescita",
            pt: "Crescimento",
          },
          effect: {
            en: "Attach a Grass Energy card from your hand to Bulbasaur.",
            ja: "手からブルバサウルスに草のエネルギーカードを取り付けます。",
            fr: "Fixez une carte d'énergie de l'herbe de votre main à Bulbasaur.",
            de: "Befestigen Sie eine Grasergiekarte von Ihrer Hand an Bulbasaur.",
            es: "Adjunte una tarjeta de energía de hierba de su mano a Bulbasaur.",
            it: "Attacca una scheda di energia in erba dalla mano a Bulbasaur.",
            pt: "Anexe um cartão de energia da grama da sua mão a bulbasaur.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Vine Whip",
            ja: "つる鞭",
            fr: "Fouet de vigne",
            de: "Rebepeitsche",
            es: "Vine látigo",
            it: "Whip di vite",
            pt: "Vine Whip",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
