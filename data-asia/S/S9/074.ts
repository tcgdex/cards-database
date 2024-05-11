import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "尖牙陸鯊",
		ja: "ガバイト"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'zh-tw': "會從頭部左右兩側的突起處發出超音波，藉此調查漆黑 洞窟裡的狀況。",
		ja: "頭の 左右の 突起から 超音波を 出して 真っ暗な 洞穴の 様子を 調べるのだ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "龍爪",
			ja: "ドラゴンクロー"
		},

		damage: 70,
		cost: ["Water", "Fighting"]
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [444]
}

export default card