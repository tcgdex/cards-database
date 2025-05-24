import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "走鯨",
		'zh-cn': "走鯨",
		ja: "アルクジラ"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'zh-tw': "遠古時代自大海上岸後， 就開始在陸地上生活。 似乎與吼吼鯨是相近的物種。",
		'zh-cn': "遠古時代自大海上岸後， 就開始在陸地上生活。 似乎與吼吼鯨是相近的物種。",
		ja: "遥か 昔に 海から 上がって 陸地で 暮らすようになった。 ホエルコに 近い 種類らしい。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "重摑",
			'zh-cn': "重摑",
			ja: "ひっぱたく"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "冰霜粉碎",
			'zh-cn': "冰霜粉碎",
			ja: "フロストスマッシュ"
		},

		damage: 80,
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [974]
}

export default card