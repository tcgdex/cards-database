import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โปเกไวทัล A",
		'id-id': "Poké Vital A"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'th-th': "ฟื้นฟู HP ของโปเกมอนฝ่ายเรา 1 ตัว [150] การ์ดนี้ ตราบใดที่ยังอยู่บนตำแหน่งทิ้งการ์ด จะนำขึ้นมือไม่ได้ และใส่กลับไปในสำรับการ์ดไม่ได้",
		'id-id': "Pulihkan HP 1 Pokémon sendiri sejumlah 150. Selama kartu ini ada di Trash, kartu ini tidak dapat ditambahkan ke Kartu Pegangan dan tidak dapat dikembalikan ke Deck."
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card