import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鬃岩狼人"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "會毫不猶豫地忽視自己不喜歡的命令。只要能解決對手，就算自己受傷也完全不在意。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "落石"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "猛擊在地"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「猛擊在地」。"
		},

		damage: 150,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
