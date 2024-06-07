import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吼鯨王"
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],

	description: {
		'zh-tw': "有時會讓大大的身體在波浪上跳躍，藉此 製造出衝擊讓對手昏迷。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "超大尺寸"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "特殊波"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有特殊能量，則增加120點傷害。"
		},

		damage: "120+",
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card