import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冷水猿"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'zh-tw': "喜歡水質乾淨的地方。頭上儲存的水如果減少，就會從尾巴吸取水來補給。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "水之波動"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "濕透雜耍"
		},

		effect: {
			'zh-tw': "查看對手的手牌，造成其中支援者卡的張數×60點傷害。"
		},

		damage: "60×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card