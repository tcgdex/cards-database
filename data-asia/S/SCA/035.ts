import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "麻麻小魚"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		'zh-tw': "由於只能放出微弱的電，所以會由許多麻麻小魚聚集起來，放出強大的電流。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "飄浮"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有能量，則這隻寶可夢【撤退】所需的能量全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "小電氣"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card