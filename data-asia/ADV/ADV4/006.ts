import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Pinsir",
         ja: "ピンシル",
         fr: "Pinsir",
         de: "Pinsir",
         es: "Pusir",
         it: "Pinir",
         pt: "Pinsir",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [127],
      hp: 70,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Crust",
            ja: "地殻",
            fr: "Croûte",
            de: "Kruste",
            es: "Corteza",
            it: "Crosta",
            pt: "Crosta",
          },
          effect: {
            en: "Any damage done to Pinsir by attacks from your opponent's Basic PokÃ©mon is reduced by 30 (after applying Weakness and Resistance).",
            ja: "対戦相手の基本的なPokã©Monからの攻撃によってPinsirに与えられた損害は、30減少します（脱力感と抵抗を適用した後）。",
            fr: "Tout dommage causé à Pinir par les attaques du poké de base de votre adversaire est réduit de 30 (après avoir appliqué une faiblesse et une résistance).",
            de: "Alle Schäden an Pinsir durch Angriffe aus dem grundlegenden Pokémon Ihres Gegners werden um 30 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Cualquier daño hecho a Pinsir por ataques del Poké Mon básico de tu oponente se reduce en 30 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato a Pinsir dagli attacchi del poké di base del tuo avversario è ridotto di 30 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado a Pinsir por ataques do Poké Mon básico do seu oponente é reduzido em 30 (após aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Sonicboom",
            ja: "Sonicboom",
            fr: "Sonicboom",
            de: "Sonicboom",
            es: "Sonicboom",
            it: "Sonicboom",
            pt: "Sonicboom",
          },
          effect: {
            en: "This attack's damage isn't affected by Weakness or Resistance.",
            ja: "この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la faiblesse ou la résistance.",
            de: "Der Schaden dieses Angriffs ist nicht von Schwäche oder Widerstand beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la debilidad o la resistencia.",
            it: "Il danno di questo attacco non è influenzato dalla debolezza o dalla resistenza.",
            pt: "O dano desse ataque não é afetado pela fraqueza ou resistência.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

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
