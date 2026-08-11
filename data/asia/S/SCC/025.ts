import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小獅獅"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'zh-tw': "血氣方剛且好奇心旺盛。當牠生氣或是開始戰鬥時，短短的鬃毛就會變熱。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火種"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card