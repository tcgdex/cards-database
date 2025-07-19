import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Cyndaquil (Delta Species)",
         ja: "シンダキル（デルタ種）",
         fr: "Cyndaquil (espèces delta)",
         de: "Cyndaquil (Delta -Arten)",
         es: "Cyndaquil (especie delta)",
         it: "Cyndaquil (Delta Species)",
         pt: "Cyndaquil (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [155],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
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
            en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokemon.",
            ja: "この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、またはそのポケモンに対するその他の影響の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les poké-powers, les poké-corps ou tout autre effet sur ce Pokémon.",
            de: "Der Schaden dieses Angriffs ist nicht von Schwäche, Widerstand, Poké-Powers, Poké-Körpern oder anderen Auswirkungen auf dieses Pokémon beeinflusst.",
            es: "El daño de este ataque no está afectado por la debilidad, la resistencia, los poké-powers, los cuerpos de los poké o ningún otro efecto en ese Pokémon.",
            it: "Il danno di questo attacco non è influenzato da debolezza, resistenza, Poké-Powers, Poké-Bodies o qualsiasi altro effetto su quel Pokemon.",
            pt: "O dano desse ataque não é afetado pela fraqueza, resistência, poké-powers, corpos de Poké ou quaisquer outros efeitos sobre esse Pokémon.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
