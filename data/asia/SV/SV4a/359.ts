import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ディンルーex"
	},

	illustrator: "5ban Graphics",
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
				cardmarket: 747713,
				tcgplayer: 567756,
			},
		},
	],

	retreat: 4
}

export default card