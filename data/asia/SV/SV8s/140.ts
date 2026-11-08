import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Tatsugiri ex",
		'th-th': "ชาริทัตสึex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Pompa Mendadak",
			'th-th': "ปั๊มพ์โจมตีแบบไม่คาดคิด"
		},

		effect: {
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan.",
			'th-th': "แดเมจของท่าต่อสู้นี้ จะไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ ฝ่ายตรงข้ามมาคิด"
		},

		damage: 100,
		cost: ["Fire", "Water"]
	}, {
		name: {
			'id-id': "Cinnabar Lure",
			'th-th': "ซินนาบาร์ลัวร์"
		},

		effect: {
			'id-id': "Lihat 10 kartu dari atas Deck sendiri, pilih sesukanya Pokémon di antaranya, lalu masukkan ke Cadangan. Kocok kembali sisa kartu ke Deck.",
			'th-th': "ดูการ์ด 10 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดโปเกมอนจากใน นั้นตามจำนวนที่ชอบ วางบนเบนช์ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ"
		},

		cost: ["Fire", "Water", "Darkness"]
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card