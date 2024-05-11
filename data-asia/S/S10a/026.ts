import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夢妖魔"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "會喃喃唸誦詛咒的話語，使對手激烈頭痛，或是看見 恐怖的幻覺，藉此折磨對手。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "怨恨咒語"
		},

		effect: {
			'zh-tw': "這隻寶可夢的HP是全滿的狀態下，受到對手的寶可夢招式的傷害而【氣絕】時，在使用招式的寶可夢身上放置8個傷害指示物。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "不祥歌聲"
		},

		effect: {
			'zh-tw': "在對手的所有寶可夢身上各放置2個傷害指示物。"
		},

		cost: ["Psychic"]
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
	regulationMark: "F"
}

export default card