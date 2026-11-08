import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "สแนชอาร์ม[ไอเท็ม]",
		'id-id': "Snatch Arm"
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'th-th': "ดูการ์ดบนมือฝ่ายตรงข้าม เลือกการ์ดโปเกมอน 1 ใบจากในนั้น ใส่กลับไปด้านล่างของสำรับการ์ดฝ่ายตรงข้าม",
		'id-id': "Lihat Kartu Pegangan lawan, pilih 1 lembar Pokémon di antaranya, lalu kembalikan ke bawah Deck lawan."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card