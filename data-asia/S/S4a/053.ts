import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡璞・鳴鳴"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		'zh-tw': "擁有旺盛的好奇心，是美樂美樂的守護神。會呼喚雷雨雲，把雷儲存在體內。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸引"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "雷電球"
		},

		damage: 110,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "D"
}

export default card