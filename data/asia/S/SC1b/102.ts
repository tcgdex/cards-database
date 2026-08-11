import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "花岩怪"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "因為５００年前作惡多端，導致身體被綁縛在楔石的裂縫裡。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "分擔怨恨"
		},

		effect: {
			'zh-tw': "將雙方的牌庫上方各1張卡丟棄。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "悔恨水滴"
		},

		effect: {
			'zh-tw': "將與自己的棄牌區的寶可夢的張數相同數量的傷害指示物，放置於對手的戰鬥寶可夢身上。"
		},

		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
