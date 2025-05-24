import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒビキのマグマッグ",
		'zh-tw': "<阿響的>熔岩蟲",
		'zh-cn': "<阿響的>熔岩蟲"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	dexId: [218],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "溶岩で できた 体は 冷えて 欠けてしまうこともあるが マグマに 浸かると 治るのだ。",
		'zh-tw': "由熔岩構成的身體有時會因 冷卻而碎缺，但只要浸泡在 岩漿中就會恢復了。",
		'zh-cn': "由熔岩構成的身體有時會因 冷卻而碎缺，但只要浸泡在 岩漿中就會恢復了。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ひをはく",
			'zh-tw': "吐火",
			'zh-cn': "吐火"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card