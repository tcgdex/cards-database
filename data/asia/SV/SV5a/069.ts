import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コータス"
	},

	illustrator: "Masa",
	category: "Pokemon",
	dexId: [324],
	hp: 130,
	types: ["Fire"],

	description: {
		'ja-jp': "石炭が エネルギーの 源。 コータスの 棲んでいる 山には 多くの 石炭が 眠っている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'ja-jp': "こうらでぶつかる"
		},

		damage: 30,

		effect: {
			'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ほのおのうず"
		},

		damage: 110,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761529,
				tcgplayer: 566124,
			},
		},
	],

	retreat: 3,
}

export default card