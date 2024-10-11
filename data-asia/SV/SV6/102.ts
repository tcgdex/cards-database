import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "向日花怪"
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'zh-tw': "由於會將沐浴到的陽光 轉換成能量，因此白天 總是一直面向著太陽。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "光返"
		},

		effect: {
			'zh-tw': "造成對手的所有寶可夢身上附加的【火】能量的數量×60點傷害。"
		},

		damage: "60×",
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "超級吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card