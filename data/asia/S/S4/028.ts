import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "刺梭魚"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "尖銳的下巴是牠的驕傲。只要發現周圍有什麼小動作，就會一直線衝過去。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "群聚"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張「刺梭魚」卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "啄"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card