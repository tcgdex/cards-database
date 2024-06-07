import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "流氓鱷"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	description: {
		'zh-tw': "用強力的顎咬住後，狠狠地扭動身體， 將獵物切斷。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "大口啃咬"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，選擇與正面出現的次數相同數量的對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 50,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "地震"
		},

		effect: {
			'zh-tw': "自己的所有備戰寶可夢也各受到30點傷害。 [在備戰區不計算弱點・抵抗力。]"
		},

		damage: 180,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card