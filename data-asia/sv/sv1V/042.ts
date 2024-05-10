import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "フラベベ",
		'zh-tw': "花蓓蓓"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [669],
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "赤い花に 乗った フラベベ。 生まれると すぐに お気に入りの 花を 探すために 飛びまわる。",
		'zh-tw': "乘著紅花的花蓓蓓。從出生那刻開始就會為了 尋找喜歡的花而四處飛行。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "かふんだま",
			'zh-tw': "花粉彈"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card