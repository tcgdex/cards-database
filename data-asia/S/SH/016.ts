import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴噬龜"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'zh-tw': "頸部可以伸縮。能從遠處迅速伸長頸部，用銳利的牙齒解決對手。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "堅硬啃咬"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加50點傷害。"
		},

		damage: "80+",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card