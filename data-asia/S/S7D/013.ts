import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "果然翁"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "為了隱藏漆黑的尾巴而悄悄地生活在黑暗之中。不會主動發動攻擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鏡面傷痛"
		},

		effect: {
			'zh-tw': "選擇自己的1隻備戰寶可夢，將與所選的寶可夢身上放置的傷害指示物數量相同的傷害指示物，放置於對手的戰鬥寶可夢身上。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "魯莽頭擊"
		},

		damage: 70,
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