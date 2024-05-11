import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吼爆彈"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'zh-tw': "巨大的叫聲產生的衝擊波會掀翻卡車。會利用跺腳來提高威力。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "輪唱"
		},

		effect: {
			'zh-tw': "造成自己的場上的，持有「輪唱」招式的寶可夢的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "巨聲"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card