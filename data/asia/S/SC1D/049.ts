import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷丘"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		'zh-tw': "長長的尾巴能夠像接地線一樣保護自己，因此即使是高壓電也不會讓牠麻痺。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "麵包拳"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "音速伏特"
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
