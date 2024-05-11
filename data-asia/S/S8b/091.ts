import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熊徒弟"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "拉緊頭上又白又長的體毛就會變得氣勢高昂，並且由丹田湧出力量。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鍛鍊"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張基本能量卡，附於這隻寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "肘擊"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card