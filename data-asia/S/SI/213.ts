import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大鋼蛇"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "强力激怒"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "地震"
		},

		effect: {
			'zh-tw': "自己的所有備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 180,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card