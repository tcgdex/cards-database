import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "クラブ",
		'zh-tw': "大鉗蟹"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [98],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "危険がせまると 口から 吐きだす 泡で 全身を 包んで 体を 大きく みせようとする。",
		'zh-tw': "如果危險逼近，就會從嘴裡吐出泡沫包裹全身， 讓身體看起來更大。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "しおまねき",
			'zh-tw': "招潮"
		},

		effect: {
			ja: "コインを1回投げオモテなら、自分の山札から「基本エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "擲1次硬幣若為正面，則從自己的牌庫選擇最多2張「基本【水】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。"
		}
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "クラブハンマー",
			'zh-tw': "蟹鉗錘"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card