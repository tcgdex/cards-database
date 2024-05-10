import { Card } from "../../../interfaces"
import Set from "../svC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啪嚓海膽"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'zh-tw': "消化食物時會製造出電力。５顆堅硬的牙齒能用來把海藻連根拔起來吃。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "尖刺粉碎"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 70,
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card