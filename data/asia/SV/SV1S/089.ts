import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ドドゲザン"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	dexId: [983],
	hp: 170,
	types: ["Darkness"],

	description: {
		'ja-jp': "ドドゲザンに 進化できるのは 大軍勢の 頂点に 立った １匹の キリキザンだけなのだ。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "とうそつりょく"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、自分のたねポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ぶったぎり"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693055,
				tcgplayer: 567206,
			},
		},
	],

	retreat: 3
}

export default card