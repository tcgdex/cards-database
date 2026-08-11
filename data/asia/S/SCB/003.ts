import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "喇叭芽"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "因為花苞長得像人臉，所以私底下有些人說牠是傳說生物曼德拉草的一種。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "毒液衝擊"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加40點傷害。"
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card