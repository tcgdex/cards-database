import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "花葉蒂"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "妖精之風"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "雙重旋轉"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×50點傷害。"
		},

		damage: "50×",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card