import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Golem - 122/128",
         ja: "ゴーレム-122/128",
         fr: "Golem - 122/128",
         de: "Golem - 122/128",
         es: "Golem - 122/128",
         it: "GOLEM - 122/128",
         pt: "Golem - 122/128",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [76],
      hp: 100,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Rock Body",
            ja: "ロックボディ",
            fr: "Corps rocheux",
            de: "Steinkörper",
            es: "Cuerpo de roca",
            it: "Corpo roccioso",
            pt: "Corpo da rocha",
          },
          effect: {
            en: "All damage done by attacks to Golem is reduced by 10 <em>(after applying Weakness and Resistance).</em>",
            ja: "ゴーレムへの攻撃によって与えられたすべての損傷は、10 <em>（脱力感と抵抗を適用した後）に減少します。</em>",
            fr: "Tous les dégâts causés par les attaques au golem sont réduits de 10 <em> (après avoir appliqué une faiblesse et une résistance). </em>",
            de: "Alle Schäden durch Angriffe auf Golem werden um 10 <em> reduziert (nach Auftragen von Schwäche und Widerstand). </Em>",
            es: "Todo el daño causado por ataques a Golem se reduce en 10 <em> (después de aplicar debilidad y resistencia). </em>",
            it: "Tutti i danni arrecati dagli attacchi a Golem sono ridotti di 10 <em> (dopo aver applicato la debolezza e la resistenza). </em>",
            pt: "Todos os danos causados por ataques ao golem é reduzido por 10 (depois de aplicar fraqueza e resistência). </em>",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Rock Tumble",
            ja: "岩の転倒",
            fr: "Rochers",
            de: "Felswäsche",
            es: "Caída de roca",
            it: "Tumble di roccia",
            pt: "Rock Tumble",
          },
          effect: {
            en: "Don't apply Resistance.",
            ja: "抵抗を適用しないでください。",
            fr: "N'appliquez pas la résistance.",
            de: "Wenden Sie keinen Widerstand an.",
            es: "No aplique resistencia.",
            it: "Non applicare resistenza.",
            pt: "Não aplique resistência.",
          },
          damage: 60,
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
