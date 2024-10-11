import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "芭瓢蟲",
		'zh-cn': "芭瓢蟲",
		ja: "レディバ"
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "天氣變冷時，大量的芭瓢蟲 會從各處聚集起來， 互相靠在一起取暖。",
		'zh-cn': "天氣變冷時，大量的芭瓢蟲 會從各處聚集起來， 互相靠在一起取暖。",
		ja: "寒くなると あちこちから レディバが たくさん 集まって 寄り添いあい 温め合う。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "魯莽頭擊",
			'zh-cn': "魯莽頭擊",
			ja: "とびだしヘッド"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [165]
}

export default card