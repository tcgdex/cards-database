import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "耿鬼"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "滿月的夜晚，如果影子自己動起來並露出笑容，那肯定是耿鬼搞的鬼。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "生命混合器"
		},

		effect: {
			'zh-tw': "在自己的回合時，可不限次數使用。選擇1個自己的場上的【超】寶可夢身上放置的傷害指示物，改放於自己的其他【超】寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "催眠波動"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		damage: 90,
		cost: ["Psychic", "Psychic", "Colorless"]
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
	regulationMark: "D"
}

export default card