import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "地鼠"
	},

	illustrator: "Hasegawa Saki",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "地鼠經過之後的土壤會得到適當的翻動，成為最適合耕種的田地。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "抓"
		},

		damage: 10,
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
