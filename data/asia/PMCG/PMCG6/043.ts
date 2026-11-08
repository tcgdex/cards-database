import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナツメのケーシィ",
	},
	illustrator: "Ken Sugimori",

	rarity: "Common",
	category: "Pokemon",
	dexId: [63],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "エネルギーループ",
			},
			effect: {
				'ja-jp': "この攻撃を使用するために、サブリナのアブラに取り付けられたサイキックエネルギーカードを手に返してください。",
			},
			damage: 20,
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575318
			},
		},
	],
};

export default card
