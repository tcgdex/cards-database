import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ตั๋วแลกเปลี่ยน",
		id: "Tiket Penggantian"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		th: "หลังจากนับการ์ดรางวัลฝ่ายเราแล้ว สับการ์ดทั้งหมดโดยไม่ดูหน้าการ์ด ใส่ กลับไปด้านล่างของสำรับการ์ด หลังจากนั้น นำการ์ดจากด้านบนของสำรับ การ์ด ตามจำนวนการ์ดที่ใส่กลับไป วางไว้เป็นการ์ดรางวัล",
		id: "Kocok semua Kartu Point sendiri dengan sisi depan menghadap ke bawah setelah menghitung jumlah Kartu Point sendiri, lalu kembalikan ke bawah Deck. Setelah itu, taruh kartu dari atas Deck sebagai Kartu Point untuk tiap lembar kartu yang telah dikembalikan."
	},

	trainerType: "Item",
	regulationMark: "I"
}

export default card