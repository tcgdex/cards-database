import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大王銅象"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	description: {
		'zh-tw': "群居的寶可夢。 鼻子的握力十分強勁， 甚至能把大石頭弄得粉碎。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "怪力"
		},

		damage: 90,
		cost: ["Metal", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "十萬馬力"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 160,
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
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
	regulationMark: "E"
}

export default card