import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ミンン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [312],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "スニッフアウト",
			},
			effect: {
				ja: "廃棄の山から1枚のカードを手に入れます。",
			},
		},
		{
			cost: ["Lightning"],
			name: {
				ja: "ネガティブスパーク",
			},
			effect: {
				ja: "ポケボディを持つ相手の各ポケモンに20のダメージを与えます。衰弱と抵抗を適用しないでください。",
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
