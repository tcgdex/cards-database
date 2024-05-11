import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "白蓬蓬"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "用牠頭上的棉絮製成的線有著十分美麗動人的光澤，是伽勒爾地區的名產。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "全滿種子"
		},

		effect: {
			'zh-tw': "選擇自己的1隻備戰寶可夢，將HP全部恢復。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "偷襲"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 50,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card