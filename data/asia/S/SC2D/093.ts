import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "頭巾混混"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "牠看似無精打采的踢擊其實擁有足以擊碎修建老匠手中混凝土的破壞力。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "窮追不捨"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "惡棍鬧事"
		},

		effect: {
			'zh-tw': "在這個回合，若從手牌使出了「聶梓」，則增加90點傷害。"
		},

		damage: "90+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
