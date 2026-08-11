import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Trapinch",
		th: "นัคครา"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		id: "Ia menggali pasir sambil menghancurkan bebatuan yang menghalangi dengan rahang besarnya. Sarangnya berbentuk ulekan.",
		th: "ขุดทรายพร้อมกับบดขยี้หินที่ขวางทางด้วยกรามอันใหญ่โตไปด้วย รูรัง ของมันเป็นรูปครกบด"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Memanggil Teman",
			th: "เรียกเพื่อน"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck.",
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน]ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Menggigit",
			th: "กัดติด"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card