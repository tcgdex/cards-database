import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Koffing",
         ja: "Koffing",
         fr: "Koffing",
         de: "Koffing",
         es: "Koffing",
         it: "Koffing",
         pt: "Koffing",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [109],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Foul Gas",
            ja: "ファウルガス",
            fr: "Gaz coque",
            de: "Foulgas",
            es: "Gas sucio",
            it: "Gas fallo",
            pt: "Gás sujo",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned; if tails, it is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは現在毒されています。尾の場合、今では混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné; Si Tails, il est maintenant confus.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet; Wenn Schwänze, ist es jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado; Si Tails, ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato; Se coda, ora è confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual está agora envenenado; Se caudas, agora está confuso.",
          },
          damage: 10,
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
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
