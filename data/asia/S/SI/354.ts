import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火箭雀"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "電光一閃"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。"
		},

		damage: "20+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card