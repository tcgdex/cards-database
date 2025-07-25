import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Magnemite",
         ja: "マグナイト",
         fr: "Magnémite",
         de: "Magnemit",
         es: "Magnemita",
         it: "Magnemite",
         pt: "Magnemita",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [81],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Magnetic Swirl",
            ja: "磁気渦",
            fr: "Tourbillon magnétique",
            de: "Magnetischer Wirbel",
            es: "Remolino magnético",
            it: "Turbinio magnetico",
            pt: "Redemoinho magnético",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing. If heads, discard an Energy attached to the Defending Pokemon.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。頭の場合は、防御ポケモンに取り付けられたエネルギーを捨てます。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien. Si les têtes, jetez une énergie attachée au Pokémon en défense.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts. Wenn Sie Köpfe haben, verwerfen Sie eine Energie, die dem verteidigenden Pokémon angeschlossen ist.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada. Si se dirige, deseche una energía unida al Pokémon defensor.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla. Se le teste, scartare un'energia attaccata al Pokemon in difesa.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada. Se as cabeças, descarte uma energia ligada ao Pokémon atual.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
