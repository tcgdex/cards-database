import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿勃梭魯"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "由於擁有察覺危險的能力，因此牠被人們誤解是 會招來災禍的寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "漩渦災禍"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到10點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "抓裂"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加70點傷害。"
		},

		damage: "50+",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card