import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "トロピウス"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	dexId: [357],
	hp: 110,
	types: ["Grass"],

	description: {
		'ja-jp': "熱帯の ジャングルに 生息。 首の フサは 甘くて 美味しい。 １年に ２回 実を つける。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "リーフドレイン"
		},

		damage: 20,

		effect: {
			'ja-jp': "このポケモンのHPを「20」回復する。"
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'ja-jp': "なんごくのかぜ"
		},

		damage: 130,

		effect: {
			'ja-jp': "このポケモンについているエネルギーをすべて、ベンチポケモン1匹につけ替える。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701530,
				tcgplayer: 568197,
			},
		},
	],

	retreat: 1,
}

export default card