import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Ledyba (Delta Species)",
         ja: "レディバ（デルタ種）",
         fr: "Ledyba (espèces delta)",
         de: "Ledyba (Delta -Arten)",
         es: "Ledyba (especie delta)",
         it: "Ledyba (Delta Species)",
         pt: "Ledyba (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [165],
      hp: 40,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 10,
        },
        {
          cost: ["Metal"],
          name: {
            en: "Supersonic",
            ja: "Supersonic",
            fr: "Supersonique",
            de: "Überschall",
            es: "Supersónico",
            it: "Supersonico",
            pt: "Supersônico",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
