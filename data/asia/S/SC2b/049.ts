import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烏波"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "在冰冷的水中生活。當周遭的天氣變涼時，也會來到陸地上覓食。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "泥巴射擊"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "敲擊"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
