import { Card } from "../../../interfaces"
import Set from "../SLD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飯匙蛇"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'zh-tw': "總是用岩石打磨尾巴上的刀刃，所以刀刃非常鋒利。和貓鼬斬是死對頭。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "突襲迴轉"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰區的【惡】寶可夢互換。"
		},

		damage: 60,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card