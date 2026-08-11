import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホイットニーのリキトゥン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [108],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "なめる",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "テールスラップ",
			},
			damage: 30,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
