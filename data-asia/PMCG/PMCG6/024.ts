import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Giovanni's Pinsir",
         ja: "ジョバンニのピンシル",
         fr: "Pinir de Giovanni",
         de: "Giovannis Pinsir",
         es: "Pinsir de Giovanni",
         it: "Giovanni's Pinsir",
         pt: "Pinsir de Giovanni",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [127],
      hp: 70,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Snapping Pincers",
            ja: "スナップピンパー",
            fr: "Claquer les pinces",
            de: "Pincers schnappen",
            es: "Pinceras de chasquido",
            it: "Sbatting Pincers",
            pt: "Pincers de estalando",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20回以上のダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 20 mehr Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge altri 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará mais 20 danos.",
          },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Overhead Toss",
            ja: "オーバーヘッドトス",
            fr: "Tirage au sort",
            de: "Overhead Wurf",
            es: "Revoltijo",
            it: "Lancio sopra la testa",
            pt: "Arremesso aéreo",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does 20 damage to 1 of your Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。尾の場合、この攻撃はベンチポケモンの1つに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si Tails, cette attaque fait 20 dégâts à 1 de votre pokemon banc. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn Schwänze, verursacht dieser Angriff 20 Schäden an 1 Ihres Bankpokémons. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si Tails, este ataque hace 20 daños a 1 de su Pokémon de banca. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se code, questo attacco fa 20 danni a 1 del tuo Pokemon in panchina. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as caudas, esse ataque causará 20 danos a 1 do seu Pokémon com bancada. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
