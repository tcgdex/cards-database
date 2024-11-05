import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆香猴",
		'zh-cn': "爆香猴",
		ja: "バオップ"
	},

	illustrator: "Wintr Wandr",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'zh-tw': "智商很高， 有把樹果烤過再吃的習性。 喜歡幫助人類。",
		'zh-cn': "智商很高， 有把樹果烤過再吃的習性。 喜歡幫助人類。",
		ja: "知能が 高く 木の実は 焼いてから 食べる 習性。 人の 手伝いを 好んでいる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "烈焰",
			'zh-cn': "烈焰",
			ja: "かえん"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [513]
}

export default card