import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鯉魚王"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		'zh-tw': "力量和速度都不太行。是世界上最弱最可憐的寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "跳跳群聚"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇任意數量的「鯉魚王」卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "怒之尾鰭"
		},

		effect: {
			'zh-tw': "增加自己的棄牌區的「鯉魚王」與「暴鯉龍」的張數×30點傷害。"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card