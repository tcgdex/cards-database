import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マリル"
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	dexId: [183],
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "全身の 体毛は 水を 弾く 性質を 持ち 水浴び しても 乾いている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "バブルドレイン"
		},

		damage: 20,

		effect: {
			'ja-jp': "このポケモンのHPを「20」回復する。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707640,
				tcgplayer: 567830,
			},
		},
	],

	retreat: 1,
}

export default card