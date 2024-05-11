import { Card } from "../../../interfaces"
import Set from "../SLL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "劈斧螳螂"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'zh-tw': "用堅硬的岩石守護己身，以粗獷的斧頭砍倒大樹。性情暴躁易怒。要是在荒野遇見牠，逃跑將是唯一選擇。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "踢散"
		},

		effect: {
			'zh-tw': "增加對手的備戰寶可夢的數量×30點傷害。"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "巨岩衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到50點傷害。"
		},

		damage: 150,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card