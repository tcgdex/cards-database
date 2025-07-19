import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Blaziken ex",
         ja: "Blaziken Ex",
         fr: "Blaziken ex",
         de: "Blaziken Ex",
         es: "Blaziken ex",
         it: "Blaziken ex",
         pt: "Blaziken Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [257],
      hp: 150,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Drag Off",
            ja: "ドラッグします",
            fr: "Faire glisser",
            de: "Sich abziehen",
            es: "Retirarse",
            it: "Trascina",
            pt: "Arraste",
          },
          effect: {
            en: "Before doing damage, you may choose 1 of your opponent's Benched Pokemon and switch it with 1 of the Defending Pokemon. Your opponent chooses the Defending Pokemon to switch.",
            ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンの1つで切り替えることができます。対戦相手は、防御するポケモンを選択して切り替えます。",
            fr: "Avant de faire des dégâts, vous pouvez choisir 1 des pokemon bancés de votre adversaire et le changer avec 1 des Pokémon en défense. Votre adversaire choisit le Pokémon en défense pour changer.",
            de: "Bevor Sie Schaden anrichten, können Sie 1 der Bankpokémon Ihres Gegners auswählen und es mit 1 des verteidigenden Pokémon schalten. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln.",
            es: "Antes de hacer daño, puede elegir 1 de los Pokémon de banca de su oponente y cambiarlo con 1 del Pokémon defensor. Tu oponente elige el Pokémon defensor para cambiar.",
            it: "Prima di fare danni, puoi scegliere 1 del Pokemon in panchina del tuo avversario e cambiarlo con 1 dei Pokemon in difesa. Il tuo avversario sceglie il Pokemon in carica da cambiare.",
            pt: "Antes de causar danos, você pode escolher 1 dos Pokémon com bancada do seu oponente e trocá -lo com 1 dos Pokémon defensores. Seu oponente escolhe o pokemon defensor para mudar.",
          },
          damage: 30,
        },
        {
          cost: ["Fire", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Burn Away",
            ja: "燃え尽きる",
            fr: "Brûler",
            de: "Brennen Sie weg",
            es: "Consumirse",
            it: "Bruciare",
            pt: "Queimar",
          },
          effect: {
            en: "Before doing damage, count the remaining HP of the Defending Pokemon. If that Pokemon is Knocked Out by this attack, Blaziken ex does damage to itself equal to this attack's damage minus the remaining HP of the Defending Pokemon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokemon.",
            ja: "ダメージを与える前に、防御ポケモンの残りのHPを数えます。そのポケモンがこの攻撃によってノックアウトされた場合、Blaziken Exは、この攻撃のダメージに等しいダメージを、防御ポケモンの残りのHPを差し引いてからです。この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、またはそのポケモンに対するその他の影響の影響を受けません。",
            fr: "Avant de faire des dégâts, comptez le HP restant du Pokémon en défense. Si ce Pokémon est assommé par cette attaque, Blaziken Ex se dommage égal aux dégâts de cette attaque moins le HP restant du Pokémon en défense. Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les poké-powers, les poké-corps ou tout autre effet sur ce Pokémon.",
            de: "Zählen Sie vor Schaden den verbleibenden HP des verteidigenden Pokémon. Wenn dieses Pokémon durch diesen Angriff ausgeschaltet wird, schädigt Blaziken EX sich selbst, gleich dem Schaden dieses Angriffs abzüglich der verbleibenden HP des verteidigenden Pokemon. Der Schaden dieses Angriffs ist nicht von Schwäche, Widerstand, Poké-Powers, Poké-Körpern oder anderen Auswirkungen auf dieses Pokémon beeinflusst.",
            es: "Antes de hacer daño, cuente el HP restante del Pokémon defensor. Si este ataque noqueado por este ataque, Blaziken Ex se da daño a sí mismo igual al daño de este ataque menos el HP restante del Pokémon defensor. El daño de este ataque no está afectado por la debilidad, la resistencia, los poké-powers, los cuerpos de los poké o ningún otro efecto en ese Pokémon.",
            it: "Prima di fare danni, conta i restanti HP del Pokemon in difesa. Se quel Pokemon viene eliminato da questo attacco, Blaziken Ex fa danni a se stesso uguale al danno di questo attacco meno i restanti HP del Pokemon in difesa. Il danno di questo attacco non è influenzato da debolezza, resistenza, Poké-Powers, Poké-Bodies o qualsiasi altro effetto su quel Pokemon.",
            pt: "Antes de causar danos, conte o HP restante do Pokémon atual. Se esse Pokemon for eliminado por esse ataque, Blaziken ex causar danos a si mesmo igual ao dano desse ataque menos o HP restante do Pokémon defensor. O dano desse ataque não é afetado pela fraqueza, resistência, poké-powers, corpos de Poké ou quaisquer outros efeitos sobre esse Pokémon.",
          },
          damage: 100,
        },
      ],

      retreat: 2,

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
