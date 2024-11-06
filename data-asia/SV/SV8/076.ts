import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "アローラ ディグダ",
		'zh-tw': "阿羅拉 地鼠",
		'zh-cn': "阿羅拉 地鼠"
	},

	illustrator: "Akino Fukuji",
	rarity: "Common",
	category: "Pokemon",
	dexId: [50],
	hp: 50,
	types: ["Metal"],

	description: {
		ja: "金色の 髭は センサー機能を 持っている。 穴から だして 周りの 様子を うかがっている。",
		'zh-tw': "金色的鬍子擁有感應器的功能。 會從洞裡伸出，查探周圍的狀態。",
		'zh-cn': "金色的鬍子擁有感應器的功能。 會從洞裡伸出，查探周圍的狀態。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "ふいをつく",
			'zh-tw': "偷襲",
			'zh-cn': "偷襲"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			'zh-cn': "擲1次硬幣若為反面，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card