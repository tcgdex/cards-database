import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Kadabra",
         ja: "カダブラ",
         fr: "Kadabra",
         de: "Kadabra",
         es: "Kadabra",
         it: "Kadabra",
         pt: "Kadabra",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [64],
      hp: 60,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic", "Psychic"],
          name: {
            en: "Recover",
            ja: "回復する",
            fr: "Récupérer",
            de: "Genesen",
            es: "Recuperar",
            it: "Recuperare",
            pt: "Recuperar",
          },
          effect: {
            en: "Discard 1 Psychic Energy card attached to Kadabra or this attack does nothing. Remove all damage counters from Kadabra.",
            ja: "Kadabraに取り付けられた1つのサイキックエネルギーカードを捨てたり、この攻撃は何もしません。 Kadabraからすべてのダメージカウンターを削除します。",
            fr: "Jetez 1 carte d'énergie psychique attachée à Kadabra ou cette attaque ne fait rien. Retirez tous les compteurs de dégâts de Kadabra.",
            de: "Laune 1 Psychic Energy Card, die an Kadabra gebunden ist, oder dieser Angriff tut nichts. Entfernen Sie alle Schadenszähler von Kadabra.",
            es: "Descarte 1 Tarjeta de energía psíquica unida a Kadabra o este ataque no hace nada. Elimine todos los contadores de daño de Kadabra.",
            it: "Scartare 1 carta di energia psichica attaccata a Kadabra o questo attacco non fa nulla. Rimuovere tutti i contatori di danno da Kadabra.",
            pt: "Descarte 1 cartão de energia psíquica ligada a Kadabra ou este ataque não faz nada. Remova todos os contadores de danos de Kadabra.",
          },

        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Super Psy",
            ja: "Super Psy",
            fr: "Super psy",
            de: "Super Psy",
            es: "Super psico",
            it: "Super Psy",
            pt: "Super Psy",
          },
          damage: 50,
        },
      ],

      retreat: 3,

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
