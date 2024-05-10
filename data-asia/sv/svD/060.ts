import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "路卡利歐"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "只要透過捕捉波導，據說就能夠看見原本 看不見身影的對手。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "復仇關節"
		},

		effect: {
			'zh-tw': "在上個對手的回合，若自己的【鬥】寶可夢因招式的傷害而【昏厥】了，則增加120點傷害。"
		},

		damage: "30+",
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "加速突刺"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「加速突刺」。"
		},

		damage: 120,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card