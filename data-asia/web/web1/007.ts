import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Charmeleon",
         ja: "チャームレオン",
         fr: "Charmeon",
         de: "Charmeleon",
         es: "Encantador",
         it: "CAMBELEON",
         pt: "Charmeleon",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [5],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Slash",
            ja: "スラッシュ",
            fr: "Sabrer",
            de: "Schrägstrich",
            es: "Barra oblicua",
            it: "Barra",
            pt: "Slash",
          },
          damage: 30,
        },
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Flamethrower",
            ja: "火炎放射器",
            fr: "Lance-flammes",
            de: "Flammenwerfer",
            es: "Echador de llama",
            it: "Lanciafiamme",
            pt: "Lança -chamas",
          },
          effect: {
            en: "Discard a Fire Energy from this Pokemon.",
            ja: "このポケモンから火エネルギーを捨ててください。",
            fr: "Jeter une énergie de feu de ce Pokémon.",
            de: "Verwerfen Sie eine Feuerenergie von diesem Pokémon.",
            es: "Deseche una energía de fuego de este Pokémon.",
            it: "Scartare un'energia di fuoco da questo Pokemon.",
            pt: "Descarte uma energia de incêndio deste Pokémon.",
          },
          damage: 50,
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
