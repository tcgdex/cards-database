import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大鉗蟹"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'zh-tw': "能在海邊找到牠。巨大的鉗子即使斷掉也會再長出來。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "必殺鉗"
		},

		effect: {
			'zh-tw': "擲2次硬幣，只要出現1次反面，這個招式失敗。"
		},

		damage: 120,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
