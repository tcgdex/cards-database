import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Wooper -028/092",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [194],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "尾のwhap",
			},
			damage: 10,
		},
		{
			cost: ["Water"],
			name: {
				'ja-jp': "ディープダイビング",
			},
			effect: {
				'ja-jp': "3コインをフリップします。各ヘッドについて、Wooperから1つのダメージカウンターを取り外します。",
			},
		},
	],

	retreat: 1,

};

export default card
