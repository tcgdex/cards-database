import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Bola Dusk",
		'th-th': "ดาร์กบอล"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'id-id': "Lihat 7 kartu dari bawah Deck sendiri, pilih 1 lembar Pokémon di antaranya, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kocok kembali sisa kartu ke Deck.",
		'th-th': "ดูการ์ด 7 ใบจากด้านล่างของสำรับการ์ดฝ่ายเรา เลือกการ์ดโปเกมอน 1 ใบ จากในนั้น ให้ฝ่ายตรงข้ามดู นำขึ้นมือ การ์ดที่เหลือใส่กลับไปในสำรับการ์ด แล้วสับ"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card