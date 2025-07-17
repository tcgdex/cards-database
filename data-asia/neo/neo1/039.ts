import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Electabuzz",
         ja: "Electabuzz",
         fr: "Electabuzz",
         de: "Electabuzz",
         es: "Electabuzz",
         it: "Electabuzz",
         pt: "Electabuzz",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [125],
      hp: 70,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Punch",
            ja: "パンチ",
            fr: "Punch",
            de: "Stempel",
            es: "Puñetazo",
            it: "Punch",
            pt: "Soco",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Lightning"],
          name: {
            en: "Swift",
            ja: "迅速",
            fr: "Rapide",
            de: "Schnell",
            es: "Rápido",
            it: "Swift",
            pt: "Swift",
          },
          effect: {
            en: "This attack's damage isn't affected by Weakness, Resistance, Pokemon Powers, or any other effects on the Defending Pokemon.",
            ja: "この攻撃の損傷は、衰弱、抵抗、ポケモンの力、または防御ポケモンに対するその他の影響の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les pouvoirs de pokemon ou tout autre effet sur le Pokémon en défense.",
            de: "Der Schaden dieses Angriffs ist nicht durch Schwäche, Widerstand, Pokemon -Kräfte oder andere Auswirkungen auf das verteidigende Pokemon beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la debilidad, la resistencia, los poderes de Pokémon o cualquier otro efecto en el Pokémon defensor.",
            it: "Il danno di questo attacco non è influenzato da debolezza, resistenza, poteri di Pokemon o altri effetti sul Pokemon in difesa.",
            pt: "Os danos desse ataque não são afetados pela fraqueza, resistência, poderes de Pokemon ou quaisquer outros efeitos no pokemon atual.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
