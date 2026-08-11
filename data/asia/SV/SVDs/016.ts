import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ลิซาร์โดะ",
		'id-id': "Charmeleon"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'th-th': "เมื่อตื่นเต้นจากการต่อสู้จะพ่นเปลวเพลิงร้อนแรงแผดเผารอบข้าง",
		'id-id': "Ketika pertarungan membuat semangat Charmeleon bergejolak, Pokémon ini meniupkan api berpijar dan membakar daerah sekelilingnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "เผาไหม้",
			'id-id': "Lidah Api"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'th-th': "เพลิงอัคคี",
			'id-id': "Ledakan Api Besar"
		},

		effect: {
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 90,
		cost: ["Fire", "Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card