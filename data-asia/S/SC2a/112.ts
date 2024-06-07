import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烏賊王"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "要是盯著牠的發光體看，就會馬上陷入催眠狀態，並且受到牠的控制。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "不祥波動"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'zh-tw': "亂啄"
		},

		effect: {
			'zh-tw': "擲2次硬幣，增加正面出現的次數×40點傷害。"
		},

		damage: "80+",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
