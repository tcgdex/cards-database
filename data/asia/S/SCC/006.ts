import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "百合根娃娃"
	},

	illustrator: "Mika Pikazo",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "喜歡乾淨的水和土壤。如果棲息地的環境變差，就會成群遷移到新的地方。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "種子炸彈"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card