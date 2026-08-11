import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "อุบายของซีโรซิก",
		'id-id': "Konspirasi Xerosic‌"
	},

	illustrator: "GOSSAN",
	category: "Trainer",

	effect: {
		'th-th': "ฝ่ายตรงข้ามทิ้งการ์ดบนมือฝ่ายตรงข้ามเอง จนเหลือ 3 ใบที่ตำแหน่งทิ้งการ์ด",
		'id-id': "Lawan membuang Kartu Pegangannya ke Trash hingga jumlah Kartu Pegangan menjadi 3 lembar."
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card