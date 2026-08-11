import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ซูเปอร์บอล",
		'id-id': "Bola Great"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'th-th': "ดูการ์ด 7 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดโปเกมอน 1 ใบจากในนั้น ให้ฝ่ายตรงข้ามดู นำขึ้นมือ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
		'id-id': "Lihat 7 kartu dari atas Deck sendiri, pilih 1 lembar Pokémon di antaranya, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kocok kembali sisa kartu ke Deck."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card