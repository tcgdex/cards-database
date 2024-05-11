import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "戽斗尖梭"
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "會旋轉著自己的尾鰭一口氣突擊。能夠以超過１００節的速度貫穿獵物。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "突刺"
		},

		damage: 50,
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