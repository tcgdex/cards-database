import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "提布莉姆"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "遇到情緒激昂的對手時，無論對方是誰，都會用粗暴的方式使其沉默。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "冥想"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "狂舞揮打"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
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
	regulationMark: "D"
}

export default card