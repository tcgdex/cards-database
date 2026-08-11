import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "イダイナキバex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "がんばんくずし"
		},

		damage: 40,

		effect: {
			'ja-jp': "場に出ているスタジアムをトラッシュする。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'ja-jp': "ギガントタスク"
		},

		damage: 250,

		effect: {
			'ja-jp': "このポケモンにも50ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693059,
				tcgplayer: 567210,
			},
		},
	],

	retreat: 4
}

export default card