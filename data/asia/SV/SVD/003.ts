import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "刺球仙人掌"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "喜歡沙漠等嚴酷環境。能靠體內儲存的水分 存活３０天。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "反擊針"
		},

		effect: {
			'zh-tw': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置3個傷害指示物。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "打擊"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card