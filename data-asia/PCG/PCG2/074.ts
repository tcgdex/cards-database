import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Skarmory",
         ja: "スカルモリー",
         fr: "Skarmory",
         de: "Skarmory",
         es: "Skarmory",
         it: "Skarmory",
         pt: "Skarmory",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [227],
      hp: 70,
      types: ["Metal"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Metallic Lift",
            ja: "メタリックリフト",
            fr: "Ascenseur métallique",
            de: "Metallic Lift",
            es: "Ascensor metálico",
            it: "Sollevamento metallico",
            pt: "Elevador metálico",
          },
          effect: {
            en: "If Skarmory has any Metal Energy attached to it, the Retreat Cost for Skarmory is 0.",
            ja: "Skarmoryに金属エネルギーが付着している場合、Skarmoryのリトリートコストは0です。",
            fr: "Si Skarmory a une énergie métallique qui lui est attachée, le coût de retraite pour Skarmory est de 0.",
            de: "Wenn Skarmory eine Metallenergie befindet, beträgt die Rückzugskosten für Skarmory 0.",
            es: "Si Skarmory tiene alguna energía metálica adjunta, el costo de retiro para Skarmory es 0.",
            it: "Se Skarmory ha un'energia di metallo attaccata ad esso, il costo di ritiro per Skarmory è 0.",
            pt: "Se a Skarmory tiver alguma energia de metal ligada a ele, o custo do retiro para Skarmory é 0.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Spearhead",
            ja: "スピアヘッド",
            fr: "Fer de lance",
            de: "Speerspitze",
            es: "Punta de lanza",
            it: "Lancia",
            pt: "Ponta de lança",
          },
          effect: {
            en: "Draw a card.",
            ja: "カードを描きます。",
            fr: "Dessinez une carte.",
            de: "Zeichnen Sie eine Karte.",
            es: "Dibuja una carta.",
            it: "Disegna una carta.",
            pt: "Desenhe uma carta.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Heavy Metal",
            ja: "重金属",
            fr: "Heavy metal",
            de: "Schwermetall",
            es: "Metal pesado",
            it: "Heavy metal",
            pt: "Heavy metal",
          },
          effect: {
            en: "Flip a coin for each Metal Energy attached to Skarmory. This attack does 10 damage plus 20 more damage for each heads.",
            ja: "スカルモリーに取り付けられた金属エネルギーごとにコインを裏返します。この攻撃は、10ダメージに加えて、ヘッドごとに20のダメージを与えます。",
            fr: "Retournez une pièce pour chaque énergie métallique attachée à Skarmory. Cette attaque fait 10 dégâts plus 20 dégâts supplémentaires pour chaque tête.",
            de: "Drehen Sie eine Münze für jede an Skarmory befestigte Metallenergie. Dieser Angriff verursacht 10 Schäden plus 20 weitere Schäden für jeden Köpfe.",
            es: "Voltee una moneda para cada energía de metal unida a Skarmory. Este ataque hace 10 daños más 20 más de daño para cada cabezal.",
            it: "Capolare una moneta per ogni energia metallica attaccata a Skarmory. Questo attacco infligge 10 danni più 20 danni in più per ogni teste.",
            pt: "Vire uma moeda para cada energia metálica ligada ao Skarmory. Este ataque causa 10 danos mais 20 mais danos para cada cabeça.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
