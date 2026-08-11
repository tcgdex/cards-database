import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蘋裹龍V"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "酸酸唾液"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式所需的能量增加2個【無】能量。"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "翅膀攻擊"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card