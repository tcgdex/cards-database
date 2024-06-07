import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洛托姆"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'zh-tw': "某位少年的發明促使人們開始製造 各種活用洛托姆的機器。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "翻修"
		},

		effect: {
			'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出6張。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "音速伏特"
		},

		damage: 80,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card