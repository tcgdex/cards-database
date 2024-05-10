import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "奧利瓦"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'zh-tw': "性情溫和，慈悲為懷。會把營養豐富且美味可口 的油分給虛弱的寶可夢。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "治癒果實"
		},

		effect: {
			'zh-tw': "將自己的1隻備戰寶可夢的HP全部恢復。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "油之射擊"
		},

		damage: 90,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card