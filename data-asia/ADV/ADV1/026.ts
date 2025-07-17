import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Mewtwo ex",
         ja: "mewtwo ex",
         fr: "Miwtwo ex",
         de: "Mewtwo ex",
         es: "Mewtwo ex",
         it: "Mewtwo ex",
         pt: "Mewtwo ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [150],
      hp: 100,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Energy Absorption",
            ja: "エネルギー吸収",
            fr: "Absorption d'énergie",
            de: "Energieabsorption",
            es: "Absorción de energía",
            it: "Assorbimento di energia",
            pt: "Absorção de energia",
          },
          effect: {
            en: "Attach up to 2 Energy cards from your discard pile to Mewtwo ex.",
            ja: "廃棄パイルからMewtwo exに最大2枚のエネルギーカードを取り付けます。",
            fr: "Attachez jusqu'à 2 cartes d'énergie de votre tas de défausse à Mewtwo Ex.",
            de: "Fügen Sie bis zu 2 Energiekarten von Ihrem Ablagerungsstapel an mewtwo ex an.",
            es: "Adjunte hasta 2 tarjetas de energía de su pila de descarte a Mewtwo Ex.",
            it: "Attacca fino a 2 carte energetiche dal tuo mucchio di scarti a mewtwo ex.",
            pt: "Anexe até 2 cartões de energia da sua pilha de descarte ao Mewtwo Ex.",
          },
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Psyburn",
            ja: "Psyburn",
            fr: "Psyburn",
            de: "Psyburn",
            es: "Psyburn",
            it: "Psyburn",
            pt: "Psyburn",
          },
          damage: 60,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
