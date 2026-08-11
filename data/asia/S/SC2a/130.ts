import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藍鴉"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'zh-tw': "頭腦聰明，懂得使用工具。會用爪子抓起小石頭投向敵人，或是用繩子把敵人綑住。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "啄"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "亂擊"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×40點傷害。"
		},

		damage: "40×",
		cost: ["Colorless", "Colorless", "Colorless"]
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
	regulationMark: "D"
}

export default card
