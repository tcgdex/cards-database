import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "始祖大鳥",
		th: "อาเคโอส"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "必須靠助跑才能飛起來。助跑的距離大約是４公里， 奔跑的速度是時速４０公里。",
		th: "จะวิ่งเตรียมเพื่อบินขึ้น ระยะทางนั้นยาวถึง 4 กิโลเมตร ความเร็วในการวิ่งอยู่ที่ 40 กิโลเมตรต่อชั่วโมง"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "始祖渦輪",
			th: "เทอร์โบยุคหิน"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫選擇最多2張特殊能量卡，附於自己的1隻寶可夢身上。並且重洗牌庫。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดพลังงานพิเศษได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา 1 ตัว แล้วสับสำรับการ์ด"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "高速之翼",
			th: "สปีดวิง"
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
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card