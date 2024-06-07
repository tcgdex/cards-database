import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙基拉斯"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "會以強勁的力道噴出在體內 壓縮好的氣體，好讓自己 能飛在空中大搞破壞的蛹。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "落石"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "噴射衝撞"
		},

		effect: {
			'zh-tw': "自己的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 60,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card