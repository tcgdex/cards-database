import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Levigato",
		th: "คาคิสึบาตะ"
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		id: "Lihat 7 kartu dari atas Deck sendiri, pilih Pokémon dan Trainer di antaranya masing-masing 1 lembar, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kocok kembali sisa kartu ke Deck.",
		th: "ดูการ์ด 7 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดโปเกมอนและ การ์ดเทรนเนอร์อย่างละ 1 ใบจากในนั้น ให้ฝ่ายตรงข้ามดู นำขึ้นมือ การ์ดที่ เหลือใส่กลับไปในสำรับการ์ดแล้วสับ"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card