import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "妙蛙花V"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "花粉炸彈"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】與【睡眠】。"
		},

		damage: 80,
		cost: ["Grass", "Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "日光颱風"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「日光颱風」。"
		},

		damage: 220,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
