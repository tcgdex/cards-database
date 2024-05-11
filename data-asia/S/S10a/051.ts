import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "銅鏡怪"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "會在古老的遺跡出現。身上的紋路不屬於伽勒爾文化， 因此至今仍然謎團重重。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "迴轉攻擊"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card