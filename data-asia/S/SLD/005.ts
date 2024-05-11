import { Card } from "../../../interfaces"
import Set from "../SLD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠　萬針魚"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "身上如同槍尖般的針以及兇暴的性情使這種寶可夢得到了海鬼的外號。會吞下毒物作為己身糧食。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "惡劣壓制"
		},

		effect: {
			'zh-tw': "若自己的場上的【惡】能量有3個以上，則增加90點傷害。"
		},

		damage: "30+",
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "突刺"
		},

		damage: 70,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card