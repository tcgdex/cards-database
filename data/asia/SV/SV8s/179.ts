import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Daya Tarik Lisia",
		th: "เสน่ห์ดึงดูดของลูเทีย"
	},

	illustrator: "En Morikura",
	category: "Trainer",

	effect: {
		id: "Pilih 1 Pokémon Basic di Cadangan lawan, lalu tukar dengan Pokémon Bertarung. Setelah itu, ubah kondisi Pokémon Bertarung yang baru menjadi Pusing.",
		th: "เลือกโปเกมอน[พื้นฐาน]บนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่ง ต่อสู้ หลังจากนั้น ทำให้โปเกมอนที่เพิ่งออกมาใหม่เป็นสภาวะ[สับสน]"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card