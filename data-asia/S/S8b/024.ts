import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "墨海馬"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "會在珊瑚的陰影處安家。如果感到危險，就會從口中吐出漆黑的墨汁逃跑。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "煙幕"
		},

		effect: {
			'zh-tw': "在下個對手的回合，當受到這個招式的寶可夢使用招式時，對手擲1次硬幣。若為反面，則那個招式失敗。"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card