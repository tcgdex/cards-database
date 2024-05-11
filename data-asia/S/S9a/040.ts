import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "古空棘魚"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "如岩石般堅硬的鱗片以及裝滿了油脂的鰾囊， 讓牠能承受深海的水壓。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "深潛"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張基本能量卡，在給對手看過後加入手牌。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撞擊"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card