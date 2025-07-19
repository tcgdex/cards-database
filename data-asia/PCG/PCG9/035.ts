import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Trapinch (Delta Species)",
         ja: "トラピンチ（デルタ種）",
         fr: "Trapinch (espèces delta)",
         de: "Trapinch (Delta -Arten)",
         es: "Trapinch (especie delta)",
         it: "Trapinch (Delta Species)",
         pt: "Trapinch (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [328],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Quick Bind",
            ja: "クイックバインド",
            fr: "Liaison rapide",
            de: "Schnellbindung",
            es: "Atención rápida",
            it: "BIND QUAST",
            pt: "Ligação rápida",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 10 damage to that Pokemon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokemon.",
            ja: "対戦相手のポケモンを1つ選択します。 This attack does 10 damage to that Pokemon.この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、またはそのポケモンに対するその他の影響の影響を受けません。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 10 dégâts à ce Pokémon. Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les poké-powers, les poké-corps ou tout autre effet sur ce Pokémon.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 10. Der Schaden dieses Angriffs ist nicht von Schwäche, Widerstand, Poké-Powers, Poké-Körpern oder anderen Auswirkungen auf dieses Pokémon beeinflusst.",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 10 daños a ese Pokémon. El daño de este ataque no está afectado por la debilidad, la resistencia, los poké-powers, los cuerpos de los poké o ningún otro efecto en ese Pokémon.",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 10 danni a quel Pokemon. Il danno di questo attacco non è influenzato da debolezza, resistenza, Poké-Powers, Poké-Bodies o qualsiasi altro effetto su quel Pokemon.",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 10 danos a esse Pokémon. O dano desse ataque não é afetado pela fraqueza, resistência, poké-powers, corpos de Poké ou quaisquer outros efeitos sobre esse Pokémon.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
