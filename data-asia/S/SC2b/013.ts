import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆香猿"
	},

	illustrator: "313",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'zh-tw': "興奮的時候，頭部與尾巴就會變熱並飛出火花。不知為何最喜歡吃甜的。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "火焰"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "終極衝擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
