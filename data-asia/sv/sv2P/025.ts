import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "セビエ",
		'zh-tw': "涼脊龍"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [996],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "背びれで 熱を 吸収して 氷エネルギーに 変換する。 高温ほど エネルギーが 溜まる。",
		'zh-tw': "會用背鰭吸收熱能以轉換成冰之能量。 溫度越高，累積的能量就越多。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ひんやり",
			'zh-tw': "寒意"
		},

		damage: 10
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "かみつく",
			'zh-tw': "咬住"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card