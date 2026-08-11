import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "สไปก์เอนเนอร์จี้",
		id: "Energi Duri"
	},

	category: "Energy",

	effect: {
		th: "การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอน จะทำงานเทียบเท่าพลังงาน[ไร้สี] 1 ลูก เมื่อโปเกมอนที่ติดการ์ดนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จาก โปเกมอนฝ่ายตรงข้าม วางตัวนับแดเมจ 2 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้",
		id: "Kartu ini berlaku sebagai 1 Energi {Bening} selama dikenakan pada Pokémon. Saat Pokémon yang mengenakan kartu ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 2 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
	},

	energyType: "Special",
	regulationMark: "I"
}

export default card