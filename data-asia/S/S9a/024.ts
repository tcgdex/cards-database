import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 幽尾玄魚"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "在溯河而上的旅程中半途喪命者的靈魂纏繞其身。在流經洗翠地區 的河川裡可謂所向無敵。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "怨恨奇襲"
		},

		effect: {
			'zh-tw': "若在上個對手的回合，自己的寶可夢因招式的傷害而【氣絕】了，則增加90點傷害，並將對手的戰鬥寶可夢【混亂】。"
		},

		damage: "30+",
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "噴射頭擊"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card