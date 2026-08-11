import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Surat Penghambat",
		th: "จดหมายรบกวน"
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		id: "Lawan menghitung jumlah Kartu Pegangannya sendiri, mengocok semua Kartu Pegangannya dengan sisi depan menghadap ke bawah, lalu mengembalikannya ke bawah Deck. Setelah itu, lawan mengambil kartu dari atas Deck untuk tiap lembar kartu yang dikembalikan.",
		th: "หลังจากฝ่ายตรงข้ามนับการ์ดบนมือฝ่ายตรงข้ามเองแล้ว สับการ์ดทั้งหมดโดย ไม่ดูหน้าการ์ด ใส่กลับไปด้านล่างของสำรับการ์ด หลังจากนั้น ฝ่ายตรงข้ามจั่ว การ์ดจากสำรับการ์ด ตามจำนวนการ์ดที่ใส่กลับไป"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card