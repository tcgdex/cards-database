import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Lt. Surge's Magnemite (Lv.12)",
         ja: "Surgeのマグネミテ（LV.12）",
         fr: "Le lieutenant de la magnémite de Surge (LV.12)",
         de: "Lt. Surge's Magnemit (Lv.12)",
         es: "Magnemite del teniente Surge (LV.12)",
         it: "Tenente Magnemite di Surge (Lv.12)",
         pt: "Magnemita do tenente Surge (LV.12)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [81],
      hp: 40,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Thundershock",
            ja: "サンダーショック",
            fr: "Thundershock",
            de: "Donnerschock",
            es: "Tortuga",
            it: "Thundershock",
            pt: "Thundershock",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 20,
        },
      ],

      retreat: 1,

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
