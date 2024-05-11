import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "打擊鬼"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "不斷地尋求強大的實力。要是看到了在山上修行的 打擊鬼，就靜靜地離開吧。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "掃腿"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card