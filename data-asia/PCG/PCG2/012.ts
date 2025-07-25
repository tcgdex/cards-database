import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Nincada",
         ja: "NINCADA",
         fr: "Nincada",
         de: "Nincada",
         es: "Nincada",
         it: "Nincada",
         pt: "Nincada",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [290],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Dig Under",
            ja: "下を掘ります",
            fr: "Creuser",
            de: "Untergräben",
            es: "Cavar debajo",
            it: "Scavare sotto",
            pt: "Escavar abaixo",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 10 damage to that Pokemon. This attack's damage isn't affected by Weakness or Resistance.",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 10 dégâts à ce Pokémon. Les dommages de cette attaque ne sont pas affectés par la faiblesse ou la résistance.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 10. Der Schaden dieses Angriffs ist nicht von Schwäche oder Widerstand beeinflusst.",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 10 daños a ese Pokémon. El daño de este ataque no se ve afectado por la debilidad o la resistencia.",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 10 danni a quel Pokemon. Il danno di questo attacco non è influenzato dalla debolezza o dalla resistenza.",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 10 danos a esse Pokémon. O dano desse ataque não é afetado pela fraqueza ou resistência.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
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
