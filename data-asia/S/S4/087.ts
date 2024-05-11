import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咕妞妞"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "察覺到危險時，會發出和噴射機同等音量的叫聲來讓敵人畏縮。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連續滾動"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×40點傷害。"
		},

		damage: "40×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card