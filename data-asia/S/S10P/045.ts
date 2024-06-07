import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "達克萊伊"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "以往曾有過在無月的夜裡，村子裡所有 的人都夢見了惡夢的異事。村人們宣稱 惡夢中出現的寶可夢就是此寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "惡夢"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'zh-tw': "漆黑利刃"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card