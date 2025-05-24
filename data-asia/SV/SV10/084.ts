import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "傲骨燕",
		'zh-cn': "傲骨燕",
		ja: "スバメ"
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "不擅長應付寒冷的季節。 為了尋找溫暖的地帶， 會１天飛上３００公里的距離。",
		'zh-cn': "不擅長應付寒冷的季節。 為了尋找溫暖的地帶， 會１天飛上３００公里的距離。",
		ja: "寒い 季節は 苦手。暖かい 土地を 探し １日 ３００キロの 距離を 飛んで 移動する。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "翅膀攻擊",
			'zh-cn': "翅膀攻擊",
			ja: "つばさでうつ"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [276]
}

export default card