import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヤドン"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	dexId: [79],
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "いつも ボーッとしていて なにを 考えているか わからない。 尻尾で エサを 釣るのが 得意。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ねむる"
		},

		effect: {
			'ja-jp': "このポケモンをねむりにする。このポケモンのHPを「30」回復する。"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "ずつき"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693157,
				tcgplayer: 568308,
			},
		},
	],

	retreat: 2,
}

export default card