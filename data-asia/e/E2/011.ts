import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Skiploom",
         ja: "スキプルーム",
         fr: "Skiploom",
         de: "Skiplom",
         es: "Skiploom",
         it: "Skiploom",
         pt: "SkiPloom",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [188],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Lightweight",
            ja: "軽量",
            fr: "Léger",
            de: "Leicht",
            es: "Ligero",
            it: "Leggero",
            pt: "Leve",
          },
          effect: {
            en: "You pay Colorless less to retreat Skiploom for each Grass Energy attached to it.",
            ja: "あなたはそれに取り付けられた各草のエネルギーについてスキプルームを後退させるために無色の少ない支払いをします。",
            fr: "Vous payez moins incolore pour retirer le saut de saut pour chaque énergie de l'herbe qui y est attachée.",
            de: "Sie zahlen weniger farblos, um den Skipploom für jede daran befestigte Grasenergie zurückzuziehen.",
            es: "Pagas menos incoloro para retirar el skiploom por cada energía de césped unida a él.",
            it: "Paghi incolore meno per ritirare Skiploom per ogni energia di erba attaccata.",
            pt: "Você paga menos incolor para recuar o skiploom para cada energia da grama anexada a ele.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Break Powder",
            ja: "パウダーを壊します",
            fr: "Casser la poudre",
            de: "Pulver brechen",
            es: "Brote",
            it: "Rompere polvere",
            pt: "Quebrar o pó",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage. If tails, this attack does 10 damage and the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与え、防御ポケモンは眠っています。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires. Si Tails, cette attaque fait 10 dégâts et le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden. Wenn Schwänze, verursacht dieser Angriff 10 Schaden und das verteidigende Pokémon schläft jetzt.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño. Si Tails, este ataque hace 10 daños y el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più. Se le code, questo attacco infligge 10 danni e il Pokemon in difesa è ormai addormentato.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos. Se as caudas, esse ataque causam 10 danos e o Pokémon atual está agora dormindo.",
          },
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
