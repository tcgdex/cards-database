import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Scyther - 016/087",
         ja: "Scyther -016/087",
         fr: "Scyther - 016/087",
         de: "Scyther - 016/087",
         es: "Scyther - 016/087",
         it: "Scither - 016/087",
         pt: "Scyther - 016/087",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [123],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Slash",
            ja: "スラッシュ",
            fr: "Sabrer",
            de: "Schrägstrich",
            es: "Barra oblicua",
            it: "Barra",
            pt: "Slash",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless"],
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
            en: "This attack's damage isn't affected by Weakness, Resistance, Pok?-Powers, Pok?-Bodies, or any other effects on the Defending Pokemon.",
            ja: "この攻撃の損傷は、脱力感、抵抗、pok？-Powers、pok？-bodies、または防御ポケモンに対するその他の影響の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les pok? -Powers, Pok? -Bodies ou tout autre effet sur le Pokémon en défense.",
            de: "Der Schaden dieses Angriffs ist nicht von Schwäche, Widerstand, Pok? -Anteilen, Pok? -Boden oder anderen Auswirkungen auf das verteidigende Pokémon betroffen.",
            es: "El daño de este ataque no se ve afectado por la debilidad, la resistencia, POK? -Poters, POK? Los cuerpos o los otros efectos en el Pokémon defensor.",
            it: "Il danno di questo attacco non è influenzato da debolezza, resistenza, Pok? -Powers, Pok? -Bodies o altri effetti sul Pokemon in difesa.",
            pt: "Os danos desse ataque não são afetados pela fraqueza, resistência, pok? -Wers, pok?-Corpos ou outros efeitos no defesa do Pokemon.",
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
