import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マチョーク",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [67],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "フォーカスエネルギー",
			},
			effect: {
				'ja-jp': "次のターン中、マチョークのメガパンチ攻撃のベースダメージは80です。",
			},
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "メガパンチ",
			},
			damage: 40,
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
