import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冷水猴"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "頭上的毛髮叢裡儲藏的水充滿營養。如果拿來灌溉，植物就會茁壯成長。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "水槍"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "咬住"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
