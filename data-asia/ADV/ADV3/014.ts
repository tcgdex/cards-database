import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Gyarados",
         ja: "ギャラドス",
         fr: "Gyarados",
         de: "Gyarados",
         es: "Gyarados",
         it: "Gyarados",
         pt: "Gyarados",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [130],
      hp: 100,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Dragon Crush",
            ja: "ドラゴンクラッシュ",
            fr: "Coup de dragon",
            de: "Dragon Crush",
            es: "Aplastamiento del dragón",
            it: "Dragon Crush",
            pt: "Dragon Crush",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage to each Defending Pokemon. Discard an Energy card from each Defending Pokemon.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は、防御する各ポケモンに10ダメージを与えます。防御する各ポケモンからエネルギーカードを捨てます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 10 dégâts à chaque Pokémon en défense. Jeter une carte d'énergie de chaque Pokémon en défense.",
            de: "Eine Münze drehen. Wenn dieser Angriff an jedem verteidigenden Pokemon 10 Schäden anrichtet. Verwerfen Sie eine Energiekarte von jedem verteidigenden Pokémon.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños a cada Pokémon defensor. Deseche una tarjeta de energía de cada Pokémon defensor.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni a ciascun Pokemon in difesa. Scartare una carta energetica da ogni Pokemon in difesa.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos a cada Pokémon defensivo. Descarte um cartão de energia de cada Pokémon defensor.",
          },
        },
        {
          cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Aqua Sonic",
            ja: "アクアソニック",
            fr: "Aqua sonic",
            de: "Aqua Sonic",
            es: "Aqua Sonic",
            it: "Aqua Sonic",
            pt: "Aqua Sonic",
          },
          effect: {
            en: "This attack's damage is not affected by Resistance.",
            ja: "この攻撃の損傷は、抵抗の影響を受けません。",
            fr: "Les dégâts de cette attaque ne sont pas affectés par la résistance.",
            de: "Der Schaden dieses Angriffs wird nicht durch Widerstand beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la resistencia.",
            it: "Il danno di questo attacco non è influenzato dalla resistenza.",
            pt: "O dano deste ataque não é afetado pela resistência.",
          },
          damage: 80,
        },
      ],

      retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
