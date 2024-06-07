import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "凍脊龍"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "凍結周圍的空氣，以冰之面罩保護臉部，並將背鰭變成冰劍。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "銳利鰭"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "冰霜粉碎"
		},

		damage: 80,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card