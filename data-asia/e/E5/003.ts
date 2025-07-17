import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Kakuna",
         ja: "カクナ",
         fr: "Kakuna",
         de: "Kakuna",
         es: "Kakuna",
         it: "Kakuna",
         pt: "Kakuna",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [14],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Exoskeleton",
            ja: "外骨格",
            fr: "Exosquelette",
            de: "Exoskelett",
            es: "Exoesqueleto",
            it: "Esoscheletro",
            pt: "Exoesqueleto",
          },
          effect: {
            en: "All damage done by attacks to Kakuna is reduced by 10 <em>(after applying Weakness and Resistance)</em>.",
            ja: "カクナへの攻撃によって与えられたすべての損傷は、10 <em>（脱力感と抵抗を適用した後）</em>に減少します。",
            fr: "Tous les dégâts causés par les attaques à Kakuna sont réduits de 10 <em> (après avoir appliqué une faiblesse et une résistance) </em>.",
            de: "Alle Schäden, die durch Angriffe auf Kakuna angerichtet werden, werden um 10 <em> reduziert (nach Auftragen von Schwäche und Widerstand) </em>.",
            es: "Todo el daño causado por los ataques a Kakuna se reduce en 10 <em> (después de aplicar debilidad y resistencia) </em>.",
            it: "Tutti i danni arrecati dagli attacchi a Kakuna sono ridotti di 10 <em> (dopo aver applicato la debolezza e la resistenza) </em>.",
            pt: "Todos os danos causados por ataques a Kakuna são reduzidos em 10 (após aplicar fraqueza e resistência) </em>.",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Poisonpowder",
            ja: "毒パウダー",
            fr: "Poudre empoisonnée",
            de: "Giftpulver",
            es: "Pozal de veneno",
            it: "Velenco",
            pt: "Poisonpowder",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
        },
      ],

      retreat: 2,

};
