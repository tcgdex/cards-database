import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Heliolisk",
		'th-th': "เอเลซาร์ด"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'id-id': "Listrik yang dihasilkan oleh seekor Heliolisk yang melebarkan jumbainya ketika bermandikan cahaya matahari cukup untuk memenuhi kebutuhan listrik sebuah kota metropolitan.",
		'th-th': "ถ้าแผ่แผงคออาบแสงแดด มันตัวเดียวสามารถผลิตไฟฟ้าที่ใช้ในเมือง ใหญ่ได้"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Parabolic Charge",
			'th-th': "พาราโบลาชาร์จ"
		},

		effect: {
			'id-id': "Pilih paling banyak 4 lembar Energi dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			'th-th': "เลือกการ์ดพลังงานได้สูงสุด 4 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Electroslug",
			'th-th': "อิเล็กทริกสลัก"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card