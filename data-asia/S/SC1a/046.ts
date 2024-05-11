import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙丘娃"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "倒斃路邊者的怨念附在孩子們堆砌的沙山上誕生而成。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "悄聲加害"
		},

		effect: {
			'zh-tw': "在對手的1隻寶可夢身上放置1個傷害指示物。"
		},

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

	retreat: 3,
	regulationMark: "D"
}

export default card