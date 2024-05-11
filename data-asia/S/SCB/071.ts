import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大岩蛇"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "彎曲扭動巨大結實的身體，以時速８０公里的猛烈勢頭挖掘前進。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "落石"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "巨岩衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到60點傷害。"
		},

		damage: 170,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card