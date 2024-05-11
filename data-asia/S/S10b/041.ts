import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿羅拉 小拉達"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],

	description: {
		'zh-tw': "每天夜裡都會為了尋找食物而潛入人們家中。牠們的大量出現已經成了社會問題。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "必殺門牙"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card