import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "リオル"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	dexId: [447],
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "仲間同士で 波動を 出して コミュニケーションを とっている。 一晩中 走り続けられる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "パンチ"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'ja-jp': "とつげき"
		},

		damage: 50,

		effect: {
			'ja-jp': "このポケモンにも20ダメージ。"
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
				cardmarket: 693052,
				tcgplayer: 567203,
			},
		},
	],

	retreat: 1,
}

export default card