import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆音怪"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		'zh-tw': "戰鬥時發出的吼聲會像地震一樣把地面震得不停搖晃。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "輪唱"
		},

		effect: {
			'zh-tw': "造成自己的場上的，持有「輪唱」招式的寶可夢的數量×50點傷害。"
		},

		damage: "50×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "巨聲"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card