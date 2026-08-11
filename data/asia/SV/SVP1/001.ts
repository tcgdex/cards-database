import { Card } from "../../../interfaces"
import Set from "../SVP1"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "原野水母"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "看起來像瑪瑙水母，其實是 截然不同的種類。雖然腳很細， 但跑起來能達到時速５０公里。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "亂踢"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。"
		},

		damage: "10×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card