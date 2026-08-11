import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨翅飛魚"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "悠然地暢游在大海中。就算有覬覦食物殘渣的鐵炮魚吸附在自己身上也毫不在意。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "彈跳"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "飛濺"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card