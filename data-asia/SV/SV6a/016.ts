import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "催眠貘"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說當牠抽動凸出的鼻子， 無論是誰在哪裡做著什麼夢， 都會被牠知道得一清二楚。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "不祥視線"
		},

		effect: {
			'zh-tw': "查看對手的手牌。"
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card