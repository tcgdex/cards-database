import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "倫琴貓ex"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "突刺目光"
		},

		effect: {
			'zh-tw': "查看對手的手牌，從其中選擇1張卡，將其丟棄。"
		},

		damage: 120,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "伏特強襲"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。"
		},

		damage: 250,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card