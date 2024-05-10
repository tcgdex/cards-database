import { Card } from "../../../interfaces"
import Set from "../sv-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉帝亞斯"
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "透過心靈感應和人類交流情感。 會用能令光線折射的羽毛 變化成其他的樣子。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "0"
		},

		effect: {
			'zh-tw': "‌若這隻寶可夢身上附有【超】能量，則將這隻寶可夢【撤退】所需的能量全部消除。"
		},

		damage: 0
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
	regulationMark: "G"
}

export default card