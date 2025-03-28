import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Cyano",
		th: "ไซยาโน"
	},

	illustrator: "Akira Komayama",
	category: "Trainer",

	effect: {
		id: "Pilih paling banyak 3 lembar Pokémon {ex} dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
		th: "เลือกการ์ด [โปเกมอน【ex】] ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่าย ตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card