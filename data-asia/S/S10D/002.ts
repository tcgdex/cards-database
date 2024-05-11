import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "遠古巨蜓"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "能以６隻腳攫住成年人 並輕鬆地飛行。 以尾部的翅膀保持平衡。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "銳利羽"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "廣域之翼"
		},

		effect: {
			'zh-tw': "若自己手牌的張數比對手手牌的張數多，則增加80點傷害。"
		},

		damage: "40+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card