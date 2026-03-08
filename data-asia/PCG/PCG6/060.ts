import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ペルシャ語",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [53],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "うろつき",
			},
			effect: {
				ja: "ターン中に、Perianを手から演奏してPokã©Monの1つを進化させると、デッキを1枚のカードで検索して手に入れることができます。その後、デッキをシャッフルします。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "スナップテール",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 1,

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

export default card
