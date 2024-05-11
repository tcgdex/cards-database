import { Card } from "../../../interfaces"
import Set from "../SDL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "煤炭龜"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "會在甲殼中燃燒煤炭產生能量。遇到危機時 會噴出黑色的煤煙。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吹火"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "防守壓制"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。"
		},

		damage: 90,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card