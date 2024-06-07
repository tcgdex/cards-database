import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙丘娃"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "死者的怨念附在沙丘上，從而變成的寶可夢。 很喜歡頭上的鏟子。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "窮追不捨"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 10,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card