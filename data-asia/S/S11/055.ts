import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "靈幽馬"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "會利用視覺之外的感官去探測周圍的狀況。據說 被牠踢到時靈魂就會出竅。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "夜之足音"
		},

		effect: {
			'zh-tw': "在對手的2隻寶可夢身上各放置2個傷害指示物。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "幻影強襲"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「幻影強襲」。"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
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