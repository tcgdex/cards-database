import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Diglett",
         ja: "ブロックのディグレット",
         fr: "Diglett de Brock",
         de: "Brocks Diglett",
         es: "Diglett de Brock",
         it: "Brock's Diglett",
         pt: "Brock's Diglett",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [50],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Surprise Attack",
            ja: "奇襲",
            fr: "Attaque surprise",
            de: "Überraschungsangriff",
            es: "Ataque sorpresa",
            it: "Attacco a sorpresa",
            pt: "Ataque surpresa",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Tremor",
            ja: "振戦",
            fr: "Tremblement",
            de: "Tremor",
            es: "Temblor",
            it: "Tremore",
            pt: "Tremor",
          },
          effect: {
            en: "Does 10 damage to each of your own Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "あなた自身のベンチ付きポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 10 dommages à chacun de vos propres pokémon bancés. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 10 jedes Ihrer eigenen Bankpokémon. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 10 daños a cada uno de sus propios Pokémon de banca. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 10 danni a ciascuno dei tuoi Pokemon in panchina. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "10 danos a cada um de seus próprios Pokémon em banco. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
