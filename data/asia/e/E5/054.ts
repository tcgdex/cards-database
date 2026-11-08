import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "グリガー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [207],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				'ja-jp': "Irongrip",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "シャープなスティンガー",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。尾の場合、防御するポケモンは麻痺しています。",
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
			stamp: ["1st Edition"],
		},
	],
};

export default card
