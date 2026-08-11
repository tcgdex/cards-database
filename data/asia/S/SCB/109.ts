import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "魅力喵"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "魅力喵心情好的時候，會用尾巴展現像韻律體操的彩帶般的美麗動作。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "喵踢"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "利爪劈擊"
		},

		damage: 40,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card