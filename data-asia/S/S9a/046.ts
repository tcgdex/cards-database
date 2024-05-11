import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "劈斧螳螂"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'zh-tw': "用堅硬的岩石守護己身，以粗獷的斧頭砍倒大樹。性情暴躁易怒。要是 在荒野遇見牠，逃跑將是唯一選擇。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "大樹斬"
		},

		effect: {
			'zh-tw': "擲2次硬幣，若全部為正面，則將對手的戰鬥寶可夢【氣絕】。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "暴亂衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 120,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card