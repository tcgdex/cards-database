import { Card } from "../../../interfaces"
import Set from "../SVEM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "代歐奇希斯"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "宇宙病毒發生突變後變成了寶可夢。 出現在極光的附近。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "精神拳"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "基因螺旋"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的所有能量卡，以任意方式改附於備戰寶可夢身上。"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card