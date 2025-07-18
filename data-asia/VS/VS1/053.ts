import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Lt. Surge's Raichu",
         ja: "Surge's Raichu中t",
         fr: "Le lieutenant de Surge Raichu",
         de: "Raichu von Lt. Surge",
         es: "Raichu del teniente Surge",
         it: "Raichu di Tenente Surge",
         pt: "Raichu do tenente Surge",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [26],
      hp: 60,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Gnaw",
            ja: "gnaw",
            fr: "Ronger",
            de: "Nagen",
            es: "Roer",
            it: "Rosicchiare",
            pt: "Roer",
          },
          damage: 10,
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Thunder Shock",
            ja: "サンダーショック",
            fr: "Choc du tonnerre",
            de: "Donnerschock",
            es: "Trueno shock",
            it: "Shock tuono",
            pt: "Trovão choque",
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
