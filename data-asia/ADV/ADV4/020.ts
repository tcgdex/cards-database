import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Tentacool",
         ja: "Tentacool",
         fr: "Tentacool",
         de: "Tentacool",
         es: "Tentacool",
         it: "Tentacool",
         pt: "Tentacool",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [72],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Freefloating",
            ja: "自由floating",
            fr: "Flottant librement",
            de: "Freiflüssigkeit",
            es: "Freefloating",
            it: "Flaghating",
            pt: "Freewloating",
          },
          effect: {
            en: "If Tentacool has no Energy attached to it, Tentacool's Retreat Cost is 0.",
            ja: "Tentacoolにエネルギーが付着していない場合、Tentacoolのリトリートコストは0です。",
            fr: "Si Tentacool n'a pas d'énergie attachée, le coût de retraite de Tentacool est de 0.",
            de: "Wenn Tentacool keine Energie befindet, beträgt die Rückzugskosten von Tentacool 0.",
            es: "Si Tentacool no tiene energía, el costo de retiro de Tentacool es 0.",
            it: "Se Tentacool non ha energia ad esso collegata, il costo di ritiro di Tentacool è 0.",
            pt: "Se a Tentacool não tiver energia ligada a ela, o custo do retiro da Tentacool é 0.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Wrap",
            ja: "包む",
            fr: "Envelopper",
            de: "Wickeln",
            es: "Envoltura",
            it: "Avvolgere",
            pt: "Enrolar",
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
