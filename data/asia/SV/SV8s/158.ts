import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Bel Penyelamat",
		th: "กระดิ่งช่วยเหลือ"
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		id: "Kartu ini hanya dapat digunakan pada giliran pertama Pemain Kedua. Pilih 1 lembar Supporter dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
		th: "การ์ดนี้ ใช้ได้ในเทิร์นแรกสุดของผู้เล่นฝ่ายเล่นทีหลังเท่านั้น เลือกการ์ดซัพพอร์ต 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card