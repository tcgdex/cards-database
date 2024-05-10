import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "走鯨"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'zh-tw': "在寒冷地帶會組成約５隻規模的群體來生活。 喜歡雪或冰所含的礦物質。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "冰柱"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "銳利鰭"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card