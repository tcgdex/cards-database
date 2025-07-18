import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Psyduck",
         ja: "SabrinaのPsyduck",
         fr: "Psyduck de Sabrina",
         de: "Sabrinas Psyduck",
         es: "Psyduck de Sabrina",
         it: "Lo Psyduck di Sabrina",
         pt: "Psyduck de Sabrina",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [54],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 10,
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Random ESP",
            ja: "ランダムなesp",
            fr: "ESP au hasard",
            de: "Zufälliger Esp",
            es: "ESP al azar",
            it: "ESP casuale",
            pt: "Random Esp",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused. If tails, this attack does no damage and Sabrina's Psyduck is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。尾の場合、この攻撃には損傷がなく、サブリナのPsyduckは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus. Si Tails, cette attaque ne fait aucun dégât et le psyduck de Sabrina est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt. Wenn Schwänze, verursacht dieser Angriff keinen Schaden und Sabrinas Psyduck ist jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido. Si Tails, este ataque no hace daño y el Psyduck de Sabrina ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso. Se le code, questo attacco non fa danni e lo Psyduck di Sabrina è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso. Se a cauda, esse ataque não causa danos e o Psyduck de Sabrina agora está confuso.",
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
