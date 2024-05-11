import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長毛巨魔VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "超極巨鑽心刺骨"
		},

		effect: {
			'zh-tw': "與使用這個招式所需的能量相比，增加身上多附的【惡】能量的數量×50點傷害。可增加的傷害數值為最多2個【惡】能量。"
		},

		damage: "170+",
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
