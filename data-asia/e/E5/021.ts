import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Houndour",
         ja: "猟犬",
         fr: "Chouchou",
         de: "Houndour",
         es: "Acosar",
         it: "Houndour",
         pt: "Houndour",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [228],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Retaliate",
            ja: "報復",
            fr: "User de représailles",
            de: "Revanchieren",
            es: "Tomar represalias",
            it: "Vendicarsi",
            pt: "Retaliar",
          },
          effect: {
            en: "This attack does 10 damage times the number of damage counters on Houndour.",
            ja: "この攻撃は、houndourのダメージカウンターの数の10倍のダメージを与えます。",
            fr: "Cette attaque fait 10 dégâts le nombre de compteurs de dégâts sur Houndour.",
            de: "Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Schäden auf Houndour.",
            es: "Este ataque hace 10 veces el número de contadores de daño en Houndour.",
            it: "Questo attacco fa 10 danni volte il numero di contatori di danno su Hounour.",
            pt: "Este ataque causa 10 danos vezes o número de contadores de danos em Houndour.",
          },
        },
        {
          cost: ["Fire"],
          name: {
            en: "Fireworks",
            ja: "花火",
            fr: "Feux d'artifice",
            de: "Feuerwerk",
            es: "Fuegos artificiales",
            it: "Fuochi d'artificio",
            pt: "Fogos de artifício",
          },
          effect: {
            en: "Flip a coin. If tails, discard a Fire Energy card attached to Houndour.",
            ja: "コインをひっくり返します。尾の場合は、ハウンドに取り付けられた消防剤カードを捨ててください。",
            fr: "Retourner une pièce. Si Tails, jetez une carte d'énergie de feu attachée à Houndour.",
            de: "Eine Münze drehen. Wenn Schwänze, entsorgen Sie eine an Houndour befestigte Brandenergiekarte.",
            es: "Voltea una moneda. Si las colas, deseche una tarjeta de energía de fuego unida a Houndour.",
            it: "Capovolgi una moneta. Se coda, scartare una carta di energia antincendio attaccata al perseguito.",
            pt: "Vire uma moeda. Se a cauda, descarte um cartão de energia de incêndio preso a Houndour.",
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
