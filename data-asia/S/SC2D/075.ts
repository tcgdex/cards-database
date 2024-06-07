import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "掘地兔"
	},

	illustrator: "313",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "力量不亞於挖掘機，連堅硬的岩盤也能挖掘。在隧道建設工程中十分活躍。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "頭突"
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "大地粉碎"
		},

		damage: 140,
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
