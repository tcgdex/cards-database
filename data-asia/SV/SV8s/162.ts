import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Mainan Santai",
		th: "ไม้หยอกเรื่อยเฉื่อย"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		id: "Kartu ini hanya dapat digunakan pada giliran pertama Pemain Kedua. Pilih 1 Energi yang dikenakan pada Pokémon di Arena lawan, lalu kembalikan ke Kartu Pegangan lawan.",
		th: "การ์ดนี้ ใช้ได้ในเทิร์นแรกสุดของผู้เล่นฝ่ายเล่นทีหลังเท่านั้น เลือกพลังงานที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายตรงข้าม 1 ลูก นำกลับขึ้นมือ ฝ่ายตรงข้าม"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card