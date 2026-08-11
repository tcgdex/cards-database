import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カルバンハ（デルタ種）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [318],
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "噛む",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "無謀な料金",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、Carvanhaはそれ自体に10ダメージを与えます。",
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
