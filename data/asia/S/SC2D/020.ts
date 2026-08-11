import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火神蛾"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "據說地表因火山灰而陷入一片黑暗時，火神蛾的火焰代替了太陽。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "炙燒傷痕"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上沒有放置傷害指示物，則這個招式失敗。"
		},

		damage: 80,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "火焰之翼"
		},

		damage: 110,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
