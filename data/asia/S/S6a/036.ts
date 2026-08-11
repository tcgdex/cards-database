import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大嘴娃"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "大嘴娃能用自己那由鋼角變化而成的巨大顎部將對手一口緊緊咬住。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬咬控制"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式所需的能量與【撤退】所需的能量，各增加1個【無】能量。"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card