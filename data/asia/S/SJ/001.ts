import { Card } from "../../../interfaces"
import Set from "../SJ"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "利歐路"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "精力充沛，可以奔跑一整夜。由於牠十分活潑， 帶牠散步的人非常辛苦。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "全力拳"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card