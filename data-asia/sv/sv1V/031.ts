import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "エレズン",
		'zh-tw': "毒電嬰"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [848],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "わがままで とても 甘えん坊。 体内の ２つの 袋に 毒と 電気を それぞれ 溜める。",
		'zh-tw': "任性且非常愛撒嬌。體內的兩個囊袋 分別儲存著毒和電。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かじる",
			'zh-tw': "咬"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card