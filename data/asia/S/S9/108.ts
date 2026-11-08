import { Card } from "models/database/card"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ドンカラスV"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 200,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ドンのふところ"
		},

		effect: {
			'ja-jp': "このポケモンは、「ポケモンのどうぐ」を4枚までつけられる。（この特性がなくなったとき、自分は「ポケモンのどうぐ」を1枚になるようにトラッシュする。）"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'ja-jp': "シャドーフィアー"
		},

		damage: 130,

		effect: {
			'ja-jp': "相手の手札を見る。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 606273,
				tcgplayer: 569736,
			},
		},
	],

	retreat: 1
}

export default card