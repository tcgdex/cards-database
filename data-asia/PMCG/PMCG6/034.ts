import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Arcanine",
         ja: "ブレインのアルカニン",
         fr: "Arcanine de Blaine",
         de: "Blaines Arcanine",
         es: "Arcanina de Blaine",
         it: "L'Arcanina di Blaine",
         pt: "Arcanina de Blaine",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [59],
      hp: 90,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Heat Tackle",
            ja: "ヒートタックル",
            fr: "Tampon de chaleur",
            de: "Wärmeangriff",
            es: "Tacleada",
            it: "Attrezzatura di calore",
            pt: "Tackle de calor",
          },
          effect: {
            en: "Blaine's Arcanine does 10 damage to itself.",
            ja: "ブレインのアルカニンは、それ自体に10ダメージを与えます。",
            fr: "L'arcanine de Blaine fait 10 dégâts à lui-même.",
            de: "Blaines Arcanine schädigt sich 10.",
            es: "El arcanino de Blaine hace 10 daños a sí mismo.",
            it: "L'arcanina di Blaine fa 10 danni a se stesso.",
            pt: "A arcanina de Blaine causa 10 danos a si mesmo.",
          },
          damage: 40,
        },
        {
          cost: ["Fire", "Fire", "Fire", "Fire"],
          name: {
            en: "Firestorm",
            ja: "ファイアストーム",
            fr: "Tempête de feu",
            de: "Feuersturm",
            es: "Tormenta de fuego",
            it: "Firestorm",
            pt: "Firestorm",
          },
          effect: {
            en: "Discard 3 Fire Energy cards attached to Blaine's Arcanine in order to use this attack.",
            ja: "この攻撃を使用するために、ブレインのアルカニンに取り付けられた3つのファイアエネルギーカードを捨てます。",
            fr: "Jetez 3 cartes d'énergie de feu attachées à l'arcanine de Blaine afin d'utiliser cette attaque.",
            de: "Abwerfen 3 Feuerergiekarten, die an Blaines Arcanine angebracht sind, um diesen Angriff zu verwenden.",
            es: "Deseche 3 cartas de energía de fuego unidas al arcanino de Blaine para usar este ataque.",
            it: "Scartare 3 carte di energia antincendio attaccate all'Arcanina di Blaine per usare questo attacco.",
            pt: "Descarte 3 cartões de energia de incêndio anexados ao arcanino de Blaine para usar esse ataque.",
          },
          damage: 120,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
