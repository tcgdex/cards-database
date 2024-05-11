import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "向日花怪"
	},

	illustrator: "zig",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "溫暖的陽光就是牠的能量。以追著太陽移動的習性聞名。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "燦燦光束"
		},

		effect: {
			'zh-tw': "若希望，從自己的手牌將最多3張能量卡丟棄，增加其張數×70點傷害。"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card