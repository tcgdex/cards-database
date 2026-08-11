import { Card } from "../../../interfaces"
import Set from "../SDM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "隨風球"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "也有人說牠是萬念俱灰的靈魂聚在一起的樣子。 會在黑夜裡靜靜地飄盪。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "鬼怪氣球"
		},

		effect: {
			'zh-tw': "在對手的1隻備戰寶可夢身上放置2個傷害指示物。"
		},

		damage: 50,
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