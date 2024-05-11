import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "帝王拿波V"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "君王之眼"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手場上的【基礎】寶可夢（「擁有規則的寶可夢」除外）的特性全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "螺旋斬"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。"
		},

		damage: 130,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card