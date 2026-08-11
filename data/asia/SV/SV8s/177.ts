import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Drasna",
		'th-th': "ดราซีนา"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'id-id': "Kocok kembali semua Kartu Pegangan sendiri ke Deck. Setelah itu, lempar koin 1 kali. Jika hasilnya sisi depan, ambil 8 kartu, jika hasilnya sisi belakang, ambil 3 kartu dari atas Deck.",
		'th-th': "นำการ์ดบนมือฝ่ายเราทั้งหมดใส่กลับไปในสำรับการ์ดแล้วสับ หลังจากนั้น ทอย เหรียญ 1 ครั้ง ถ้าออกหัวจั่วการ์ด 8 ใบ ถ้าออกก้อยจั่วการ์ด 3 ใบจากสำรับ การ์ด"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card