import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Umbreon",
         ja: "Umbreon",
         fr: "Ombréon",
         de: "Umbreon",
         es: "Umbreón",
         it: "Umbreon",
         pt: "Umbreon",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [197],
      hp: 80,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 20,
        },
        {
          cost: ["Darkness", "Darkness", "Colorless"],
          name: {
            en: "Feint Attack",
            ja: "FEINT攻撃",
            fr: "Attaque feinte",
            de: "Scheinangriff",
            es: "Ataques finos",
            it: "Attacco di finta",
            pt: "Ataque de finse",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 30 damage to that Pokemon. This attack's damage isn't affected by Weakness, Resistance, Pokemon Powers, or any other effects on the Defending Pokemon.",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。この攻撃の損傷は、衰弱、抵抗、ポケモンの力、または防御ポケモンに対するその他の影響の影響を受けません。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 30 dégâts à ce Pokémon. Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les pouvoirs de pokemon ou tout autre effet sur le Pokémon en défense.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 30. Der Schaden dieses Angriffs ist nicht durch Schwäche, Widerstand, Pokemon -Kräfte oder andere Auswirkungen auf das verteidigende Pokemon beeinflusst.",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 30 daños a ese Pokémon. El daño de este ataque no se ve afectado por la debilidad, la resistencia, los poderes de Pokémon o cualquier otro efecto en el Pokémon defensor.",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 30 danni a quel Pokemon. Il danno di questo attacco non è influenzato da debolezza, resistenza, poteri di Pokemon o altri effetti sul Pokemon in difesa.",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 30 danos a esse Pokémon. Os danos desse ataque não são afetados pela fraqueza, resistência, poderes de Pokemon ou quaisquer outros efeitos no pokemon atual.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
