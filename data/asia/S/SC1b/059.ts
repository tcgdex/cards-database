import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大鉗蟹"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'zh-tw': "能在海邊找到牠。巨大的鉗子即使斷掉也會再長出來。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "水流浴"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到10點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "夾住"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
