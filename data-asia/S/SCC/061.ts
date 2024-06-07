import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電燈怪"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "發出強光讓獵物暫時失明。趁獵物露出破綻時，用電擊招呼對手。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "障眼光束"
		},

		effect: {
			'zh-tw': "在下個對手的回合，當受到這個招式的寶可夢使用招式時，對手擲1次硬幣。若為反面，則那個招式失敗。"
		},

		damage: 40,
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			'zh-tw': "電球"
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card