import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "甜竹竹"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "從牠體內滲透出來的水果香氣會強烈地刺激鳥寶可夢的食慾。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "光合作用"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【草】能量卡，附於自己的寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "活蹦亂跳"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
