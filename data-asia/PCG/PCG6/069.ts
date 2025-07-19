import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Umbreon (Delta Species)",
         ja: "Umbreon（デルタ種）",
         fr: "Umbreon (espèces delta)",
         de: "Umbreon (Delta -Arten)",
         es: "Umbreon (especie delta)",
         it: "Umbreon (Delta Species)",
         pt: "Umbreon (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [197],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Delta Moon",
            ja: "デルタムーン",
            fr: "Lune delta",
            de: "Delta Moon",
            es: "Delta Moon",
            it: "Delta Moon",
            pt: "Delta Moon",
          },
          effect: {
            en: "When your opponent attaches a Special Energy card from his or her hand to 1 of his or her PokÃ©mon, put 1 damage counter on that PokÃ©mon. You can't use more than 1 Delta Moon PokÃ©-Body each turn.",
            ja: "対戦相手が自分の手からポカンの1つに特別なエネルギーカードを取り付けると、そのポカンに1つのダメージカウンターを置きます。 1つ以上のデルタムーンポケを使用することはできません。",
            fr: "Lorsque votre adversaire attache une carte d'énergie spéciale de sa main à un de son poké, mettez 1 compteur de dégâts sur ce poké. Vous ne pouvez pas utiliser plus de 1 Delta Moon Pokã © -Body à chaque tour.",
            de: "Wenn Ihr Gegner eine spezielle Energiekarte von seiner Hand an einen seiner oder ihr Poké mon anschließt, geben Sie 1 Schadenschalter auf diesen Poké Mon. Sie können nicht mehr als 1 Delta Moon Poké-Body in jeder Runde verwenden.",
            es: "Cuando tu oponente adjunta una tarjeta de energía especial de su mano a 1 de su Poké Mon, ponga 1 contador de daño en ese Poké Mon. No puedes usar más de 1 Delta Moon Poké-Body en cada turno.",
            it: "Quando il tuo avversario collega una speciale carta energetica dalla sua mano a 1 del suo poké mon, metti 1 contatore di danni su quel poké mon. Non puoi usare più di 1 Delta Moon Poké -body ogni turno.",
            pt: "Quando seu oponente prende um cartão de energia especial da mão a 1 de seu Poké -Mon, coloque 1 contador de danos naquele Poké © seg. Você não pode usar mais de 1 Delta Moon Poké-corpo a cada volta.",
          },
      }],

      attacks: [
        {
          cost: ["Darkness", "Metal"],
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
            en: "Choose 1 of your opponent's Pokemon. This attack does 30 damage to that Pokemon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokemon.",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、またはそのポケモンに対するその他の影響の影響を受けません。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 30 dégâts à ce Pokémon. Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les poké-powers, les poké-corps ou tout autre effet sur ce Pokémon.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 30. Der Schaden dieses Angriffs ist nicht von Schwäche, Widerstand, Poké-Powers, Poké-Körpern oder anderen Auswirkungen auf dieses Pokémon beeinflusst.",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 30 daños a ese Pokémon. El daño de este ataque no está afectado por la debilidad, la resistencia, los poké-powers, los cuerpos de los poké o ningún otro efecto en ese Pokémon.",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 30 danni a quel Pokemon. Il danno di questo attacco non è influenzato da debolezza, resistenza, Poké-Powers, Poké-Bodies o qualsiasi altro effetto su quel Pokemon.",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 30 danos a esse Pokémon. O dano desse ataque não é afetado pela fraqueza, resistência, poké-powers, corpos de Poké ou quaisquer outros efeitos sobre esse Pokémon.",
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
