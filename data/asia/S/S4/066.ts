import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "土狼犬"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "有著敏銳的嗅覺，絕對不會放過自己盯上的獵物。個性非常執著。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "後踢"
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