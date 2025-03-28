import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Heliolisk",
		th: "เอเลซาร์ด"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		id: "Listrik yang dihasilkan oleh seekor Heliolisk yang melebarkan jumbainya ketika bermandikan cahaya matahari cukup untuk memenuhi kebutuhan listrik sebuah kota metropolitan.",
		th: "ถ้าแผ่แผงคออาบแสงแดด มันตัวเดียวสามารถผลิตไฟฟ้าที่ใช้ในเมือง ใหญ่ได้"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Parabolic Charge",
			th: "พาราโบลาชาร์จ"
		},

		effect: {
			id: "Pilih paling banyak 4 lembar Energi dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			th: "เลือกการ์ดพลังงานได้สูงสุด 4 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Electroslug",
			th: "อิเล็กทริกสลัก"
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