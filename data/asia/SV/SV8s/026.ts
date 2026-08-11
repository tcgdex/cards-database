import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Oricorio",
		'th-th': "โอโดริโดริ"
	},

	illustrator: "Heisuke Kitazawa",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'id-id': "Wujud Oricorio yang mengisap Nektar Merah. Pokémon ini melakukan step yang bergairah dan menciptakan api yang menggelora.",
		'th-th': "ร่างของโอโดริโดริที่ดูดน้ำหวานสีแดง เต้นรำอย่างร้อนแรงทำให้เกิด เปลวไฟลุกโหม"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Energy Assist",
			'th-th': "‌เอนเนอร์จี้แอสซิสต์"
		},

		effect: {
			'id-id': "Pilih paling banyak 2 lembar Energi Dasar dari Trash sendiri, lalu kenakan pada 1 Pokémon Cadangan.",
			'th-th': "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่ โปเกมอนบนเบนช์ 1 ตัว"
		},

		cost: ["Fire"]
	}, {
		name: {
			'id-id': "Bunga Api",
			'th-th': "สะเก็ดไฟ"
		},

		effect: {
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash.",
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card