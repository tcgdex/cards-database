import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冷水猿"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'zh-tw': "喜歡水質乾淨的地方。頭上儲存的水如果減少，就會從尾巴吸取水來補給。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "水槍"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "終極衝擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
