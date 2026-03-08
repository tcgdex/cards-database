import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ホロンのマグネトン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [82],
	hp: 70,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "余分なボール",
			},
			effect: {
				ja: "防御ポケモンがポケモンエクスの場合、この攻撃は30ダメージと20ダメージを与えます。",
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
