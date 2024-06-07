import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪納霏"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "有著能與任何寶可夢心意相通的神奇能力。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "引流"
		},

		effect: {
			'zh-tw': "查看對手的手牌，從其中選擇最多2張【基礎】寶可夢卡，放置於對手的備戰區。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "水子彈"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card