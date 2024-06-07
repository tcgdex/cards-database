import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "始祖大鳥",
		th: "อาเคโอส",
		ja: "アーケオス"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "必須靠助跑才能飛起來。助跑的距離大約是４公里， 奔跑的速度是時速４０公里。",
		th: "จะวิ่งเตรียมเพื่อบินขึ้น ระยะทางนั้นยาวถึง 4 กิโลเมตร ความเร็วในการวิ่งอยู่ที่ 40 กิโลเมตรต่อชั่วโมง",
		ja: "飛び立つために 助走する。 その 距離は およそ ４キロ。 走る速さは 時速４０キロ。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "始祖渦輪",
			th: "เทอร์โบยุคหิน",
			ja: "プライマルターボ"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫選擇最多2張特殊能量卡，附於自己的1隻寶可夢身上。並且重洗牌庫。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดพลังงานพิเศษได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา 1 ตัว แล้วสับสำรับการ์ด",
			ja: "自分の番に1回使える。自分の山札から特殊エネルギーを2枚まで選び、自分のポケモン1匹につける。そして山札を切る。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "高速之翼",
			th: "สปีดวิง",
			ja: "スピードウイング"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [567]
}

export default card