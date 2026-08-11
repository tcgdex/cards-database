import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "閃焰王牌V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "球場跑者"
		},

		effect: {
			'zh-tw': "若場上有競技場卡，則這隻寶可夢【撤退】所需的能量全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "紅蓮踢"
		},

		damage: 140,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
