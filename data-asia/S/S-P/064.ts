import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "破破舵輪VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "嗡嗡連鎖"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到這隻寶可夢身上附加的【草】能量的數量×30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "極巨船錨"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「極巨船錨」。"
		},

		damage: 240,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card