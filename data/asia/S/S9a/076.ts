import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヒスイ バクフーンV"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'ja-jp': "こがす"
		},

		effect: {
			'ja-jp': "相手のバトルポケモンをやけどにする。"
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'ja-jp': "せんりつのほのお"
		},

		damage: 120,

		effect: {
			'ja-jp': "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見てから、相手の山札にもどして切る。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
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
				cardmarket: 609844,
				tcgplayer: 570646,
			},
		},
	],

	retreat: 2
}

export default card