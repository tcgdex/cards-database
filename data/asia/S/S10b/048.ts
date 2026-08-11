import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美錄梅塔VMAX"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "超極巨鋼甲重拳"
		},

		effect: {
			'zh-tw': "與使用這個招式所需的能量相比，增加身上多附的【鋼】能量的數量×60點傷害。可增加的傷害數值為最多2個【鋼】能量。"
		},

		damage: "160+",
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

	retreat: 4,
	regulationMark: "F"
}

export default card