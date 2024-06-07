import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "露奈雅拉"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		'zh-tw': "有時會從通往異世界的洞穴裡把未知的力量和生命召喚到這個世界來。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "月光傷痛"
		},

		effect: {
			'zh-tw': "在對手的所有寶可夢身上放置傷害指示物直到各寶可夢身上的傷害指示物數量變為2倍為止。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "精神子彈"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 130,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card