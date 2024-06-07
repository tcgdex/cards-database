import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "眷戀雲"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "當牠越過大海飛來，便代表嚴寒的 冬季即將終結。傳說中其慈愛將使 新的生命在洗翠大地上萌芽。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸取之吻"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「20」HP。"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "愛之共感"
		},

		effect: {
			'zh-tw': "若自己的手牌的張數與對手的手牌的張數相同，則增加70點傷害。"
		},

		damage: "70+",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card