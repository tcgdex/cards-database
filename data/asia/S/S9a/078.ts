import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヒスイ ダイケンキV"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "つづらおとし"
		},

		effect: {
			'ja-jp': "相手の場のポケモンについている「ポケモンのどうぐ」を2枚まで選び、トラッシュする。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'ja-jp': "シャドースラッシュ"
		},

		damage: 180,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。"
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
				cardmarket: 609846,
				tcgplayer: 570648,
			},
		},
	],

	retreat: 2
}

export default card