import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コノヨザルex"
	},

	illustrator: "PLANETA Hiiragi",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "アンガーグラッジ"
		},

		damage: "20×",

		effect: {
			'ja-jp': "このポケモンにダメカンを12個までのせ、のせた数×20ダメージ。"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'ja-jp': "ちきゅうなげ"
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707654,
				tcgplayer: 567844,
			},
		},
	],

	retreat: 2
}

export default card