import { Card } from "../../../interfaces"
import Set from "../sv-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡蒂狗"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "性格誠實，容易和人親近。 遇到敵人時牠會吼叫追咬， 試著把敵人趕走。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "燃起"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張「基本【火】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "火之爪"
		},

		damage: 70,
		cost: ["Fire", "Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card