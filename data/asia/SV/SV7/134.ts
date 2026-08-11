import { Card } from "models/database/card"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "勇気のおまもり"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているたねポケモンの最大HPは「＋50」される。"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 779148,
				tcgplayer: 567989,
			},
		},
	],

	trainerType: "Tool",
	rarity: "None"
}

export default card