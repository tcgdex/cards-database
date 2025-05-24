import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ความครื้นเครงของ MC",
		id: "MC Pemeriah Acara"
	},

	illustrator: "Cona Nitanda",
	category: "Trainer",

	effect: {
		th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่าย ตรงข้ามน้อยกว่าหรือเท่ากับ 3 ใบ จะจั่วการ์ดเพิ่มได้ 2 ใบ",
		id: "Ambil 2 kartu dari atas Deck sendiri. Jika sisa Kartu Point lawan adalah 3 lembar atau kurang, ambil lagi 2 kartu tambahan."
	},

	trainerType: "Supporter",
	regulationMark: "I"
}

export default card