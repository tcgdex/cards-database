import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小嘴蝸"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "有著會對電能產生反應的奇異體質。不知為何，和蓋蓋蟲待在一起就會進化。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "噴吐光束"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card