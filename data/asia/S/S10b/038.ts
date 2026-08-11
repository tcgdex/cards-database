import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙基拉斯"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "被外殼覆蓋，但能自由自在地跳來跳去。兼具硬度與速度，因此破壞力超群。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "粉碎子彈"
		},

		effect: {
			'zh-tw': "雙方的所有備戰寶可夢也各受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撞擊"
		},

		damage: 70,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card