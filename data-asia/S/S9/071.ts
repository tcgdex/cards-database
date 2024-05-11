import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "齒輪怪"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		'zh-tw': "會從尖刺的前端發出強力電擊。紅色核心裡填充著 非常多的能量。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "齒輪堡壘"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有【基礎】寶可夢，受到對手的寶可夢招式的傷害「-20」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "回轉攻擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加90點傷害。"
		},

		damage: "90+",
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card