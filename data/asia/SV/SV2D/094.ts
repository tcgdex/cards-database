import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ディンルーex"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 240,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "じゅばくのだいち"
		},

		effect: {
			'ja-jp': "このポケモンがバトル場にいるかぎり、相手の場のダメカンがのっているポケモン（ポケモンexをのぞく）の特性は、すべてなくなる。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'ja-jp': "ランドスクープ"
		},

		damage: 150,

		effect: {
			'ja-jp': "相手のベンチポケモン1匹に、ダメカンを2個のせる。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707705,
				tcgplayer: 565956,
			},
		},
	],

	retreat: 4
}

export default card