import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "กู้คืนพลังงาน[ไอเท็ม]",
		id: "Pemulihan Energi"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
		id: "Pilih paling banyak 2 lembar Energi Dasar dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card