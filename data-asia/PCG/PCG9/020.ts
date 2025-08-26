import { Card } from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		ja: "バゴン（デルタ種）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [371],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "花崗岩の頭",
			},
			effect: {
				ja: "対戦相手の次のターン中、攻撃によるバゴンに与えられた損害は10倍に減少します（脱力感と抵抗を適用した後）。",
			},
			damage: 10,
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
