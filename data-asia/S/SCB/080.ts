import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨炭山"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		'zh-tw': "進入戰鬥狀態後，牠會把煤炭山燃燒得通紅，飛撒火花來燒焦四周。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "煤炭炮"
		},

		effect: {
			'zh-tw': "擲與這隻寶可夢身上附加的能量的數量相同次數的硬幣，造成正面出現的次數×90點傷害。"
		},

		damage: "90×",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "狂野衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到50點傷害。"
		},

		damage: 200,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card