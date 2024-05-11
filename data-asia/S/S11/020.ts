import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小海獅"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "因為有著厚厚的脂肪，所以完全不怕寒冷的海域， 但在溫暖的海裡就有點容易中暑。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭錘"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "潑水"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card