import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "麻麻鰻"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "食慾旺盛的寶可夢。一發現獵物就會發動襲擊，用電流使其麻痺後大快朵頤。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "麻痺粉碎"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的場上寶可夢身上附加的能量，將其丟棄。"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "伏特頭擊"
		},

		damage: 60,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card