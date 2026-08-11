import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨石丁"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'zh-tw': "佇立在大草原上，每天眺望著日升日落。擅長強而有力的踢技。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "百萬噸重踢"
		},

		damage: 80,
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "力量壓制"
		},

		effect: {
			'zh-tw': "若身上附有的能量比使用這個招式所需的能量多1個，則增加60點傷害。"
		},

		damage: "120+",
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card