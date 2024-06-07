import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鬼斯"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		'zh-tw': "從氣體中誕生的生命體。若被牠那有毒氣體形成的身體裹住， 不管是誰都會昏迷。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "無聲加害"
		},

		effect: {
			'zh-tw': "在對手的戰鬥寶可夢身上放置1個傷害指示物。"
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

	retreat: 0,
	regulationMark: "F"
}

export default card