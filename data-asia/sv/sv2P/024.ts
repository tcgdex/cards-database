import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "セビエ",
		'zh-tw': "涼脊龍"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [996],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "背びれで 熱を 吸収して 氷エネルギーに 変換する。 高温ほど エネルギーが 溜まる。",
		'zh-tw': "會用背鰭吸收熱能以轉換成冰之能量。 溫度越高，累積的能量就越多。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card