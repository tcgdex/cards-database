import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "穿著熊"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "轉轉拳"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "怪力"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card