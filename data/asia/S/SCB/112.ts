import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆炸頭水牛"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "就算使出猛烈的頭錘，蓬鬆的體毛也能將傷害都吸收掉。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "食草"
		},

		effect: {
			'zh-tw': "這隻寶可夢使用的招式，對對手的【草】寶可夢造成的傷害「+60」點。"
		}
	}, {
		name: {
			'zh-tw': "爆炸頭突擊"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card