import { Card } from "../../../interfaces"
import Set from "../sv-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "潤水鴨"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "很久以前從遠方來到了這裡棲息。羽毛分泌出的凝膠有防水和防污的效果。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拍擊"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "踢"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card