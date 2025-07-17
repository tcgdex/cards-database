import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Cyndaquil",
         ja: "シンダキル",
         fr: "Cyndaquil",
         de: "Cyndaquil",
         es: "Cyndaquil",
         it: "Cyndaquil",
         pt: "Cyndaquil",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [155],
      hp: 50,
      types: ["Fire"],
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
          cost: ["Fire"],
          name: {
            en: "Singe",
            ja: "シング",
            fr: "Roussir",
            de: "Versengen",
            es: "Chamuscar",
            it: "Singe",
            pt: "Singe",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Burned.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンが燃やされます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant brûlé.",
            de: "Eine Münze drehen. Wenn Köpfe, wird das verteidigende Pokemon jetzt verbrannt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora se quema.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in difesa viene ora bruciato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está queimado.",
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
