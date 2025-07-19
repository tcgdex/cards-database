import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Horsea (Delta Species)",
         ja: "ホース（デルタ種）",
         fr: "Horsea (espèce delta)",
         de: "Pferdesee (Delta -Arten)",
         es: "Horsea (especie delta)",
         it: "Horsea (Delta Species)",
         pt: "Horsea (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [116],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Colorless"],
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
            en: "Switch Horsea with 1 of your Benched Pokemon.",
            ja: "ベンチ付きポケモンを1枚馬に切り替えます。",
            fr: "Changez de hors-mer avec 1 de votre pokemon banc.",
            de: "Wechseln Sie den Vorfahrer mit 1 Ihrer Bank -Pokémon.",
            es: "Cambia de Horsea con 1 de tu Pokémon de banca.",
            it: "Cambia Horusea con 1 del tuo Pokemon in panchina.",
            pt: "Mude o Horsea com 1 do seu Pokémon em banco.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
