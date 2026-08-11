import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "敲音猴"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "當牠用特別的木棒敲奏時，能夠給予花草活力的力量就會變成音波擴散開來。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "亂抓"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
