import { Card } from "../../../interfaces"
import Set from "../sv-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "墨海馬"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "會在水中跳舞似地游動來 製造漩渦。玩耍時會和夥伴 比賽誰做出的漩渦比較大。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鉤住"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card