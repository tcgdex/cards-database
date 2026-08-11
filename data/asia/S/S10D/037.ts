import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "功夫鼬"
	},

	illustrator: "yuu",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "千錘百鍊的功夫鼬能夠在１分鐘內使出 超過１００次的劈擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劈打"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "迴轉踢"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card