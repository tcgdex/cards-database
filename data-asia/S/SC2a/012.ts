import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蛋蛋"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "用心靈感應與夥伴交流。聽說同時具備植物與某種屬性的基因。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "種子炸彈"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
