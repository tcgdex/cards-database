import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵臂槍蝦"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "從右邊的鉗子噴出水來移動。因為無法取得平衡，所以不擅長直線游動。"
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
			'zh-tw': "夾住"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card