import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Peselancar",
		th: "นักโต้คลื่น"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		id: "Tukar Pokémon Bertarung sendiri dengan Pokémon Cadangan. Setelah itu, ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 5 lembar.",
		th: "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายเรากับโปเกมอนบนเบนช์ หลังจากนั้น จั่ว การ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 5 ใบ"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card