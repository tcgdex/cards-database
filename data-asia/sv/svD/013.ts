import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "煤炭龜"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "會在甲殼的內側燃燒煤炭。遭受到敵人攻擊時， 會噴灑黑煙然後逃走。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踩"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "集中砲火"
		},

		effect: {
			'zh-tw': "擲與這隻寶可夢身上附加的【火】能量的數量相同次數的硬幣，造成正面出現的次數×80點傷害。"
		},

		damage: "80×",
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card