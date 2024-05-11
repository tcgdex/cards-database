import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大牙狸",
		ja: "ビッパ"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "總是啃大樹和石頭來打磨堅硬的門牙。 在水邊築巢生活。",
		ja: "いつも 大木や 石を かじって 丈夫な 前歯を 削っている。 水辺に 巣を 作り 暮らす。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "滾動",
			ja: "ころがる"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [399]
}

export default card