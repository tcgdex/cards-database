import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "哲爾尼亞斯"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說當頭上的角閃耀七色光芒時，就會分享永恆的生命。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "生命之息"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張各不同屬性的基本能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "極光角擊"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card