import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クレファ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [173],
	hp: 30,
	types: ["Colorless"],
	stage: "Baby",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "エネルギーリサイクル",
			},
			effect: {
				'ja-jp': "廃棄の山からデッキに基本的なエネルギーカードをシャッフルします。",
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
