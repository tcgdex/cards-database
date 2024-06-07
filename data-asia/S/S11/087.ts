import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捲捲耳"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "將左右兩耳都捲起來時，就代表牠的身體或心情 狀況不佳，需要照顧。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "試跳"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card