import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超甲狂犀"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],

	description: {
		'zh-tw': "會在手掌的洞裡塞進岩石和石丸子發射出去，每隻手裡可以裝填３個。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "巨岩墜落"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "岩盤震動"
		},

		effect: {
			'zh-tw': "雙方的所有身上放置有傷害指示物的備戰寶可夢也各受到60點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card