import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Beri Babiri",
		th: "ผลริริบะ"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		id: "Saat Pokémon yang mengenakan kartu ini menerima kerusakan akibat serangan dari Pokémon {Logam} lawan, kerusakan tersebut berkurang sejumlah 60, lalu buang kartu ini ke Trash.",
		th: "เมื่อโปเกมอนที่ติดการ์ดนี้อยู่ ได้รับแดเมจของท่าต่อสู้จากโปเกมอน[โลหะ]ฝ่าย ตรงข้าม แดเมจนั้นจะถูก [-60] ทิ้งการ์ดนี้ที่ตำแหน่งทิ้งการ์ด"
	},

	trainerType: "Tool",
	regulationMark: "H"
}

export default card