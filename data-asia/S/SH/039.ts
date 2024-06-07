import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛辮羊"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "要是身上的毛長得太長就會不能動彈。用毛辮羊的體毛織成的布結實得讓人吃驚。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "擊飛"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加40點傷害。"
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card