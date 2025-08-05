import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Sunflora",
         ja: "軽いサンフロラ",
         fr: "Sunflora légère",
         de: "Leichte Sonnenflora",
         es: "Sunfrora ligero",
         it: "Sunflora leggera",
         pt: "Sunflora leve",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [192],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Reflected Sunlight",
            ja: "反射した日光",
            fr: "Soleil réfléchi",
            de: "Reflektiertes Sonnenlicht",
            es: "Luz solar reflejada",
            it: "Luce solare riflessa",
            pt: "Luz solar refletida",
          },
          effect: {
            en: "Attach up to 2 Grass Energy cards from your hand to 1 of your Grass Pokemon.",
            ja: "あなたの手から最大2匹の草のエネルギーカードをあなたの草のポケモンの1つに取り付けます。",
            fr: "Fixez jusqu'à 2 cartes d'énergie de l'herbe de votre main à 1 de votre Pokémon d'herbe.",
            de: "Befestigen Sie bis zu 2 Grasergiekarten von Ihrer Hand an 1 Ihres Graspokémons.",
            es: "Conecte hasta 2 tarjetas de energía de hierba desde su mano a 1 de su Pokémon de hierba.",
            it: "Attacca fino a 2 carte di energia dell'erba dalla tua mano a 1 del tuo pokemon di erba.",
            pt: "Anexe até 2 cartões de energia da grama da sua mão a 1 do seu Pokémon de grama.",
          },
        },
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Solarbeam",
            ja: "SolarBeam",
            fr: "Solaire",
            de: "Solarbeam",
            es: "Rayo solar",
            it: "Solarbeam",
            pt: "SolarBeam",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
