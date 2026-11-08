import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "REMORAID",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [223],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "エネルギーの引き分け",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。ヘッドの場合は、デッキを検索して基本的なエネルギーカードを探して、それを添付してリムレードします。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Water"],
			name: {
				'ja-jp': "かみそりフィン",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
