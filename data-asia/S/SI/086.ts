import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉普拉斯"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "十分耐寒，不畏冰海。 皮膚滑滑的， 摸起來會有點涼。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "冰凍之風"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "飛濺弓擊"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量全部放回手牌，對手的1隻備戰寶可夢受到100點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card