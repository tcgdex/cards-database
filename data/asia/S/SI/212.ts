import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大岩蛇"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
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