import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火爆猴"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "和其他的寶可夢比起來，牠的腦血管特別結實，就算一直發怒也能活得好好的。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "場地粉碎"
		},

		effect: {
			'zh-tw': "將場上的對手的競技場卡丟棄。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "暴怒轟炸"
		},

		effect: {
			'zh-tw': "造成自己的備戰區的身上放置有傷害指示物的寶可夢數量×50點傷害。"
		},

		damage: "50×",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card