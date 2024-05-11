import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "月石"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "月亮的盈虧似乎會影響牠力量的增減。每到滿月之夜就會變得活躍。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "預知未來"
		},

		effect: {
			'zh-tw': "查看自己或者對手的牌庫上方4張，以任意順序排列，放回牌庫上方。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "精神強念"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×20點傷害。"
		},

		damage: "20+",
		cost: ["Psychic", "Colorless"]
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
