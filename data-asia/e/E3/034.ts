import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Horsea - 034/087",
         ja: "Horsea -034/087",
         fr: "Horsea - 034/087",
         de: "Horsea - 034/087",
         es: "Horsea - 034/087",
         it: "Horsea - 034/087",
         pt: "Horsea - 034/087",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [116],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Reverse Thrust",
            ja: "逆スラスト",
            fr: "Poussée inversée",
            de: "Rückwärtsschub",
            es: "Empuje inverso",
            it: "Spinta inversa",
            pt: "Impulso reverso",
          },
          effect: {
            en: "Switch Horsea with 1 of your Benched Pokemon, if any.",
            ja: "ベンチ付きポケモンを1枚馬に切り替えます。",
            fr: "Changez de hors-mer avec 1 de votre Pokémon banc, le cas échéant.",
            de: "Wechseln Sie den Vorfahrer mit 1 Ihrer Bank -Pokemon, falls vorhanden.",
            es: "Cambie Horsea con 1 de su Pokémon en banca, si es que hay alguno.",
            it: "Cambia Horusea con 1 del tuo Pokemon in panchina, se presente.",
            pt: "Mude o Horsea com 1 do seu Pokémon em banco, se houver.",
          },
          damage: 20,
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
