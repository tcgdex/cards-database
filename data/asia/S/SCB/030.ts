import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "墨海馬"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 40,
	types: ["Water"],

	description: {
		'zh-tw': "會在珊瑚的陰影處安家。如果感到危險，就會從口中吐出漆黑的墨汁逃跑。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "水槍"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card