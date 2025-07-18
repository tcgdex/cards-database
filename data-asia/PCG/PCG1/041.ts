import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Voltorb",
         ja: "Voltorb",
         fr: "Voltorbe",
         de: "Voltorb",
         es: "Voltorbo",
         it: "Voltorb",
         pt: "Voltorb",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [100],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Floating Electrons",
            ja: "浮遊電子",
            fr: "Électrons flottants",
            de: "Schwimmende Elektronen",
            es: "Electrones flotantes",
            it: "Elettroni galleggianti",
            pt: "Elétrons flutuantes",
          },
          effect: {
            en: "As long as Voltorb has any Energy attached to it, Voltorb's Retreat Cost is 0.",
            ja: "Voltorbにエネルギーが付着している限り、Voltorbのリトリートコストは0です。",
            fr: "Tant que Voltorb a une énergie qui lui est attachée, le coût de retraite de Voltorb est de 0.",
            de: "Solange Voltorb über jede Energie befestigt ist, betragen die Rückzugskosten von Voltorb 0.",
            es: "Mientras Voltorb tenga alguna energía adjunta, el costo de retiro de Voltorb es 0.",
            it: "Finché Voltorb ha un'energia attaccata ad esso, il costo di ritiro di Voltorb è 0.",
            pt: "Enquanto o Voltorb possui qualquer energia anexada a ele, o custo do retiro de Voltorb é 0.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
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
          damage: 20,
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
