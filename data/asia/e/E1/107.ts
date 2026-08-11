import { Card } from "models/database/card"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグビー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [240],
	hp: 30,
	types: ["Fire"],
	stage: "Baby",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				'ja-jp': "エネルギーキャッチ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、捨てられた山から基本的なエネルギーカードを手に入れてください。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
