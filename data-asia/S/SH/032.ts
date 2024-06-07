import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "利牙魚"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		'zh-tw': "結實的下巴和牙齒能夠輕易地咬碎木造的船隻。與野蠻鱸魚互相爭奪著食物。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card