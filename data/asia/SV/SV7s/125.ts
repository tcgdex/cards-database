import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "อีวุย",
		'id-id': "Eevee"
	},

	illustrator: "Susumu Maeya",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'th-th': "มีหน่วยพันธุกรรมที่ผิดปกติ รังสีจากหินทำให้ร่างกายกลายพันธุ์อย่างฉับพลัน",
		'id-id': "Eevee memiliki susunan genetik yang tidak teratur. Tubuhnya akan bermutasi ketika terkena radiasi yang dikeluarkan batu elemen."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "คัลเลอร์ฟูลแคช",
			'id-id': "Colorful Catch"
		},

		effect: {
			'th-th': "เลือกการ์ดพลังงานพื้นฐานที่แต่ละใบต่างประเภทกันได้สูงสุด 3 ใบ จากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			'id-id': "Pilih paling banyak 3 lembar Energi Dasar yang masing-masing berbeda tipenya dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "พุ่งหัวชน",
			'id-id': "Tandukan Kepala"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card