import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵蟻"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "在巢穴的深處產卵。受到熔蟻獸的襲擊時會用 大大的顎部咬住對方進行反擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "挖能量"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "咬住"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card