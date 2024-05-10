import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨金怪",
		th: "เมทากรอส"
	},

	illustrator: "Katsunori Sato",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		'zh-tw': "當氣溫下降到低於冰點時，磁力就會變強。因此棲息在 雪山裡的巨金怪非常有活力。",
		th: "เมื่ออุณหภูมิของอากาศต่ำกว่าจุดเยือกแข็งอำนาจแม่เหล็กจะแข็งแกร่งขึ้น ดังนั้นเมทากรอสที่อาศัยอยู่บนภูเขาหิมะจึงกระฉับกระเฉงมาก"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "彗星拳",
			th: "โคเม็ทพันช์"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢「彗星拳」的傷害「+60」點。",
			th: "เทิร์นถัดไปของฝ่ายเรา แดเมจจาก [โคเม็ทพันช์] ของโปเกมอนนี้จะถูก [＋60]"
		},

		damage: 60,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "潔淨爆破",
			th: "ลัสเตอร์บลาสต์"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 200,
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card