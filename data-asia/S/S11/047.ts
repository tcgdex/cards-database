import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "綿綿泡芙"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "每天要吃掉與自己體重相同重量的砂糖， 糖分不夠就會鬧脾氣。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "活蹦亂跳"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "撞擊"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card