import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 蔥遊兵"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "只有歷經過無數戰鬥的大蔥鴨才能進化成這個樣子。當大蔥枯萎了就會離開戰場。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "突刺"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "流星突擊"
		},

		effect: {
			'zh-tw': "若使用了這個招式，則這隻寶可夢離開戰鬥場前無法使用「流星突擊」。"
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
