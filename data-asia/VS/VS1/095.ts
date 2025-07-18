import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Rocket's Entei",
         ja: "ロケットのentei",
         fr: "Entei de Rocket",
         de: "Rocket's Entei",
         es: "Entei de cohete",
         it: "Rocket's Entei",
         pt: "Entei do foguete",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [244],
      hp: 70,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Burning Tackle",
            ja: "燃焼タックル",
            fr: "Tacle brûlant",
            de: "Brennende Tackle",
            es: "Ardiente",
            it: "Attrezzatura in fiamme",
            pt: "Tackle ardente",
          },
          effect: {
            en: "Discard 1 Energy card attached to Rocket's Entei. Rocket's Entei does 10 damage to itself.",
            ja: "RocketのEnteiに取り付けられた1つのエネルギーカードを廃棄します。 Rocket's Enteiはそれ自体に10ダメージを与えます。",
            fr: "Jetez 1 carte d'énergie attachée à l'Entei de Rocket. Entei de Rocket se fait 10 dégâts.",
            de: "Verwerfen Sie 1 Energiekarte an Rockets Entei. Rockets Entei schädigt sich 10.",
            es: "Descarte 1 Tarjeta de energía unida a Rocket's Entei. Entei de Rocket hace 10 daños a sí mismo.",
            it: "Scartare 1 carta energetica attaccata all'Entei di Rocket. Entei di Rocket fa 10 danni a se stesso.",
            pt: "Descarte 1 cartão de energia ligado ao Entei do Rocket. O Entei, do Rocket, causa 10 danos a si mesmo.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
