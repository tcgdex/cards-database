import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "銅鏡怪"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'zh-tw': "會在古老的遺跡出現。身上的紋路不屬於伽勒爾文化，因此至今仍然謎團重重。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞"
		},

		damage: 10,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "高速飛行"
		},

		damage: 20,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
