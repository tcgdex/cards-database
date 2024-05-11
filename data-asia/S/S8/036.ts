import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毒電嬰"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "透過讓自身的毒素產生化學反應來發電。電力雖然弱，卻能造成麻痺。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "叫聲"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-30」點。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "小伏特"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card