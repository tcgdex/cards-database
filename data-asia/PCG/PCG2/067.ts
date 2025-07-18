import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Rayquaza Star",
         ja: "レイカザの星",
         fr: "Star de Rayquaza",
         de: "Rayquaza Star",
         es: "Estrella de Rayquaza",
         it: "Rayquaza Star",
         pt: "Rayquaza Star",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [384.1],
      hp: 90,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire", "Lightning"],
          name: {
            en: "Spiral Rush",
            ja: "スパイラルラッシュ",
            fr: "Ruée vers la spirale",
            de: "Spiralsturm",
            es: "Espiral apresurado",
            it: "Corsa a spirale",
            pt: "Corrida em espiral",
          },
          effect: {
            en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
            ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Retournez une pièce jusqu'à ce que vous obteniez la queue. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Münze um, bis Sie Schwänze bekommen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltea una moneda hasta que obtengas colas. Este ataque hace 30 veces el número de cabezas.",
            it: "Capovolgi una moneta fino a quando non ricevi la coda. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Vire uma moeda até obter caudas. Este ataque causa 30 danos vezes o número de cabeças.",
          },
        },
        {
          cost: ["Fire", "Fire", "Lightning", "Lightning"],
          name: {
            en: "Holy Star",
            ja: "聖なる星",
            fr: "Sainte étoile",
            de: "Heiliger Stern",
            es: "Estrella santa",
            it: "Santa stella",
            pt: "Estrela sagrada",
          },
          effect: {
            en: "Discard all Energy cards attached to Rayquaza {{Star|this Pokemon}}. This attack does 100 damage to each of your opponent's Pokemon-ex. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "Rayquazaに取り付けられたすべてのエネルギーカードを捨てます{{Star | This Pokemon}}。この攻撃は、対戦相手の各ポケモンエクスに100のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Jetez toutes les cartes d'énergie attachées à Rayquaza {{Star | ce pokemon}}. Cette attaque inflige 100 dégâts à chacun des Pokémon-EX de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Verwerfen Sie alle Energiekarten, die an Rayquaza {{star | this Pokemon}} gebunden sind. Dieser Angriff schädigt 100 Schäden an den Pokemon-ex Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Descarte todas las tarjetas de energía unidas a Rayquaza {{Star | This Pokemon}}. Este ataque hace 100 daños a cada uno de los Pokémon-EX de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scarta tutte le carte energetiche collegate a Rayquaza {{Star | questo Pokemon}}. Questo attacco infligge 100 danni a ciascuno dei Pokemon-Ex del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Descarte todos os cartões de energia anexados a Rayquaza {{Star | this Pokemon}}. Este ataque causa 100 danos a cada um dos Pokemon-Ex. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
