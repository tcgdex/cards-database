import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "地鼠"
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],

	description: {
		'zh-tw': "地鼠經過之後的土壤會得到適當的翻動，成為最適合耕種的田地。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "抓"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
