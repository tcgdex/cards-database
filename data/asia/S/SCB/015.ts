import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡璞・哞哞"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "雖被稱呼為守護神，但有著會將自己視為敵人的對手徹底擊潰的狂暴個性。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "推倒"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "大自然的裁決"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢身上附加的能量全部丟棄。這個情況下，增加80點傷害。"
		},

		damage: "80+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card