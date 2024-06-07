import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小貓怪",
		ja: "コリンク"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		'zh-tw': "能利用肌肉的伸縮來產生電流。當牠全身都在抖動時， 就代表牠正在激烈地發電。",
		ja: "筋肉の 収縮で 電気を つくる。 武者震いは 激しく 発電している 証拠。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬",
			ja: "かじる"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F",
	rarity: "Common",
	dexId: [403]
}

export default card