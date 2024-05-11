import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "起源帝牙盧卡V",
		th: "ดีอัลกาดั้งเดิมV",
		ja: "オリジンディアルガV"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "金屬塗層",
			th: "เมทัลโค้ตติ้ง",
			ja: "メタルコーティング"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張【鋼】能量卡，附於這隻寶可夢身上。",
			th: "เลือกการ์ดพลังงาน[โลหะ]ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้",
			ja: "自分のトラッシュからエネルギーを2枚まで選び、このポケモンにつける。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "時間斷絕",
			th: "หยุดเวลา",
			ja: "じかんだんぜつ"
		},

		damage: 180,
		cost: ["Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card