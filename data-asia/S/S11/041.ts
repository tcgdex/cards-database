import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "麻麻鰻魚王"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		'zh-tw': "用手臂的力量從大海裡爬出，襲擊水邊的獵物。 會瞬間將獵物拖入海中。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "盤蜷"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+120」點。"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "激電流"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 160,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card