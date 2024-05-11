import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蚊香泳士"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	description: {
		'zh-tw': "全身都是肌肉。即使是在寒冷的大海也能用結實的手臂 擊碎浮冰，奮勇前進。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "轉轉拳"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 60,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "飛濺閉環"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，放回手牌。"
		},

		damage: 160,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card