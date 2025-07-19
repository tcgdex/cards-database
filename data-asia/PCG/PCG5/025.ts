import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Wailmer",
         ja: "ウェイルマー",
         fr: "Curieux",
         de: "Wailmer",
         es: "Wailmer",
         it: "Wailmer",
         pt: "Wailmer",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [320],
      hp: 80,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Double Tackle",
            ja: "ダブルタックル",
            fr: "Tacle double",
            de: "Doppelangestellter",
            es: "Tackle doble",
            it: "Doppio attrezzatura",
            pt: "Tackle duplo",
          },
          effect: {
            en: "Does 20 damage to each Defending Pokemon.",
            ja: "防御する各ポケモンに20のダメージを与えます。",
            fr: "Fait 20 dommages à chaque Pokémon en défense.",
            de: "Schädigt 20 an jedem verteidigenden Pokémon 20.",
            es: "Hace 20 daños a cada Pokémon defensor.",
            it: "Fa 20 danni a ciascun Pokemon in difesa.",
            pt: "Causa 20 danos a cada Pokémon defensor.",
          },
        },
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Whirlpool",
            ja: "渦",
            fr: "Tourbillon",
            de: "Whirlpool",
            es: "Torbellino",
            it: "Whirlpool",
            pt: "Hidromassagem",
          },
          effect: {
            en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokemon.",
            ja: "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
            fr: "Retourner une pièce. Si les têtes, jetez une carte d'énergie attachée au Pokémon en défense.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, entsorgen Sie eine an das verteidigende Pokémon angeschlossene Energiekarte.",
            es: "Voltea una moneda. Si se dirige, deseche una tarjeta de energía unida al Pokémon defensor.",
            it: "Capovolgi una moneta. Se le teste, scartare una carta di energia collegata al Pokemon in difesa.",
            pt: "Vire uma moeda. Se as cabeças, descarte um cartão de energia preso ao Pokémon atual.",
          },
          damage: 30,
        },
      ],

      retreat: 3,

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
