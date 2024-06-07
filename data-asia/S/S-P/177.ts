import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美錄梅塔V"
	},

	illustrator: "sadaji",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "臂充能"
		},

		effect: {
			'zh-tw': "若希望，從自己的手牌選擇1張【鋼】能量卡，附於這隻寶可夢身上。"
		},

		damage: 50,
		cost: ["Metal", "Metal"]
	}, {
		name: {
			'zh-tw': "百萬噸重拳"
		},

		damage: 140,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card