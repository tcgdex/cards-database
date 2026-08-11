import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熔蟻獸"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'zh-tw': "從尾部的孔洞吸入空氣，燃起火焰。如果孔洞被堵住了，身體就會不舒服。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "灼燒"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		},

		damage: 10,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "火之爪"
		},

		damage: 50,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
