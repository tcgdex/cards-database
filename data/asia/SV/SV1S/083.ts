import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ラルトス"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	dexId: [280],
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "人の 感情を 頭の 赤い ツノで 敏感に キャッチする 力を 持つ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "サイコショット"
		},

		damage: 30
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
				cardmarket: 693049,
				tcgplayer: 567200,
			},
		},
	],

	retreat: 1,
}

export default card