import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โอการ์ปอง หน้ากากบ่อน้ำ",
		'id-id': "Ogerpon Topeng Sumur"
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'th-th': "ร่างที่เชี่ยวชาญทั้งรุกและรับ ปลดปล่อยท่าออกมาได้อย่างไม่หยุดหย่อน ดั่งสายน้ำที่พรั่งพรูออกมาไม่ขาดสาย",
		'id-id': "Wujud yang unggul dalam menyerang dan bertahan. Ia dapat terus melancarkan jurusnya tanpa henti seperti air yang terus menyembur keluar."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "รำสักการะน้ำ",
			'id-id': "Pertunjukan Spiritual Air"
		},

		effect: {
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[น้ำ]] 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอน ฝ่ายเรา แล้วสับสำรับการ์ด",
			'id-id': "Pilih 1 lembar Energi Dasar {Air} dari Deck sendiri, lalu kenakan pada Pokémon sendiri. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "บับเบิลเดรน",
			'id-id': "Bubble Drain"
		},

		effect: {
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			'id-id': "Pulihkan HP Pokémon ini sejumlah 30."
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card