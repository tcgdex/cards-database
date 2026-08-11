import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Eevee（デルタ種）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [133],
	hp: 50,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "金属スクープ",
			},
			effect: {
				'ja-jp': "廃棄物の山を検索して、金属エネルギーカードを添付し、Eeveeに取り付けます。",
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
