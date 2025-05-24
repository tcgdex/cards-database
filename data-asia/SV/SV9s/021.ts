import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "โอการ์ปอง หน้ากากสีทีล",
		id: "Ogerpon Topeng Teal"
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		th: "ประเภทของมันจะเปลี่ยนไปตามหน้ากากที่สวม ล่อหลอกศัตรูด้วยท่า เตะและการเคลื่อนไหวที่เฉียบแหลมว่องไว",
		id: "Tipe Pokémon ini berubah tergantung topeng yang dipakai. Ia mempermainkan musuhnya dengan pergerakannya yang gesit dan jurus tendangannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "รำสักการะหญ้า",
			id: "Pertunjukan Spiritual Daun"
		},

		effect: {
			th: "เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอน ฝ่ายเรา แล้วสับสำรับการ์ด",
			id: "Pilih 1 lembar Energi Dasar {Daun} dari Deck sendiri, lalu kenakan pada Pokémon sendiri. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "ค้อนยักษ์",
			id: "Palu Oni"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [ค้อนยักษ์] ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Palu Oni."
		},

		damage: 120,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card