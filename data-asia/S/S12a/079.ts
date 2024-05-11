import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 火焰鳥",
		th: "กาลาร์ ไฟเยอร์"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "釋放著像火焰般燃起的邪惡氣場。這樣的外觀 讓牠得到了火焰鳥之名。",
		th: "ด้วยรูปลักษณ์ของตัวมันที่เผาไหม้ออร่าชั่วร้ายดุจเปลวเพลิงนั้น จึงได้รับการขนานนามว่าไฟเยอร์"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "邪惡充能",
			th: "ชาร์จความมุ่งร้าย"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從自己的手牌選擇最多2張【惡】能量卡，附於這隻寶可夢身上。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง เลือกการ์ดพลังงาน [ความมืด] ได้สูงสุด 2 ใบจากการ์ดบนมือฝ่ายเรา ติดที่โปเกมอนนี้"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "怒火中燒",
			th: "เพลิงพิโรธลุกโชน"
		},

		effect: {
			'zh-tw': "增加對手已經獲得的獎賞卡的張數×50點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนการ์ดรางวัลที่ฝ่ายตรงข้ามหยิบไปแล้ว x50"
		},

		damage: "20+",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card