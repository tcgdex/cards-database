import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆香猿V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "力量濺射"
		},

		effect: {
			'zh-tw': "若希望，從自己的手牌選擇最多2張基本能量卡，以任意方式附於自己的寶可夢身上。"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "閃焰漏接"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
		},

		damage: "90+",
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card