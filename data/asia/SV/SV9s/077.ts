import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โอการ์ปอง หน้ากากฐานราก",
		'id-id': "Ogerpon Topeng Fondasi"
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'th-th': "ร่างที่โดดเด่นด้านการป้องกัน สามารถตั้งรับแรงกระแทกได้อย่าง มั่นคงดั่งฐานรากของบ้าน",
		'id-id': "Wujud yang paling unggul dalam bertahan. Ia dapat menerima guncangan dengan tangguh seperti fondasi yang menyokong rumah."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "รำสักการะหิน",
			'id-id': "Pertunjukan Spiritual Bebatuan"
		},

		effect: {
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอน ฝ่ายเรา แล้วสับสำรับการ์ด",
			'id-id': "Pilih 1 lembar Energi Dasar {Petarung} dari Deck sendiri, lalu kenakan pada Pokémon sendiri. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ต่อยตีภูเขา",
			'id-id': "Menohok Gunung"
		},

		effect: {
			'th-th': "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Buang 1 kartu dari atas Deck lawan ke Trash."
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card