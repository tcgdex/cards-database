import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "代歐奇希斯"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "宇宙病毒發生突變後變成了寶可夢。出現在極光的附近。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "光子提昇"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有「匯流能量」，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Colorless", "Colorless", "Colorless"]
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
	regulationMark: "E"
}

export default card