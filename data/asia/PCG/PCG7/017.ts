import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピッジット（デルタ種）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [17],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'ja-jp': "旋風",
			},
			effect: {
				'ja-jp': "対戦相手は、ディフェンディングポケモンを1匹のベンチポケモンで切り替えます。",
			},
			damage: 30,
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
