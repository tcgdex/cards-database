import { Card } from "../../../interfaces"
import Set from "../svEL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "炙燙鱷"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'zh-tw': "火之能量與過剩的生命力相互結合，使得牠頭上 出現了蛋狀的火球。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "火球回轉"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，放回手牌。"
		},

		damage: 90,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card