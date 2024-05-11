import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蓋諾賽克特"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "存在於３億年前的寶可夢。被等離子隊改造，在背部裝了砲台。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "直擊彈"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到50點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "高科技光炮"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 120,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
