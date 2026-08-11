import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Tatapan Jasmine",
		th: "สายตาของมิคัง"
	},

	illustrator: "Taira Akitsu",
	category: "Trainer",

	effect: {
		id: "Pada giliran lawan berikutnya, kerusakan akibat serangan dari Pokémon lawan yang diterima semua Pokémon sendiri berkurang sejumlah 30. (Termasuk Pokémon yang baru dimasukkan ke Arena.)",
		th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนฝ่ายเราทุกตัว จะ ได้รับจากโปเกมอนฝ่ายตรงข้ามจะถูก [-30] (รวมถึงโปเกมอนที่เพิ่งออกมา ใหม่บนกระดาน)"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card