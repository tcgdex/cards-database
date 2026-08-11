import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "タタッコ"
	},

	illustrator: "USGMEN",
	category: "Pokemon",
	dexId: [852],
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "餌を 求め 地上に 上がる。 好奇心旺盛で 目にしたものは とりあえず 触手で 殴る。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "ちょっとつっこむ"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンにも10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 788045,
				tcgplayer: 579454,
			},
		},
	],

	retreat: 2,
	rarity: "None"
}

export default card