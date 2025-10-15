import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "Wooper -028/092",
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
				ja: "尾のwhap",
			},
			damage: 10,
		},
		{
			cost: ["Water"],
			name: {
				ja: "ディープダイビング",
			},
			effect: {
				ja: "3コインをフリップします。各ヘッドについて、Wooperから1つのダメージカウンターを取り外します。",
			},
		},
	],

	retreat: 1,

};

export default card
