import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ニャオハ"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	dexId: [906],
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "フワフワの 体毛は 植物に 近い 成分。 こまめに 顔を 洗って 乾燥を 防ぐ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "ひざしをあつめる"
		},

		effect: {
			'ja-jp': "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}, {
		cost: ["Grass"],

		name: {
			'ja-jp': "タネばくだん"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701531,
				tcgplayer: 568198,
			},
		},
	],

	retreat: 1
}

export default card