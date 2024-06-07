import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴噬龜VMAX"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "堅硬甲殼"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "超極巨頭撞南墻"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加80點傷害。"
		},

		damage: "160+",
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
