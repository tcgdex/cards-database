import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Counter Gain",
		th: "เคาน์เตอร์เกน"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		id: "Jika sisa Kartu Point sendiri lebih banyak dari sisa Kartu Point lawan, Energi yang dibutuhkan oleh Pokémon yang mengenakan kartu ini untuk menggunakan serangan berkurang 1 Energi {Bening}.",
		th: "ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายเรา มากกว่าจำนวนการ์ดรางวัลที่เหลือ ของฝ่ายตรงข้าม พลังงานสำหรับใช้ท่าต่อสู้ของโปเกมอนที่ติดการ์ดนี้อยู่ พลังงาน[ไร้สี]จะลดลง 1 ลูก"
	},

	trainerType: "Tool",
	regulationMark: "H"
}

export default card