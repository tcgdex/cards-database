import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "セビエ"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	dexId: [996],
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "背びれで 熱を 吸収して 氷エネルギーに 変換する。 高温ほど エネルギーが 溜まる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "たいあたり"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707642,
				tcgplayer: 567832,
			},
		},
	],

	retreat: 1
}

export default card