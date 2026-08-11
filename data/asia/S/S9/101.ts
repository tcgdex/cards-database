import { Card } from "models/database/card"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "シェイミV"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "はばたく"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "リベンジバースト"
		},

		damage: "60＋",

		effect: {
			'ja-jp': "相手がすでにとったサイドの枚数×40ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 606266,
				tcgplayer: 569729,
			},
		},
	],

	retreat: 1
}

export default card