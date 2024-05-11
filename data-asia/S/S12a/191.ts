import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿勃梭魯"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "如風般地奔馳在山野中。形狀如弓的角能夠敏銳感應到自然災害的預兆。"
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