import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Set Deduksi",
		th: "ชุดสืบสวน"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		id: "Lihat 3 kartu dari atas Deck sendiri. Tukar urutan kartu sesukanya, lalu kembalikan ke atas Deck atau kocok semua kartu tersebut dengan sisi depan menghadap ke bawah, lalu kembalikan ke bawah Deck.",
		th: "ดูการ์ด 3 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เรียงตามลำดับที่ชอบ ใส่กลับ ไปด้านบนของสำรับการ์ด หรือ สับการ์ดนั้นทั้งหมดโดยไม่ดูหน้าการ์ด ใส่กลับ ไปด้านล่างของสำรับการ์ด"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card