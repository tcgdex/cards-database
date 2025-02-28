import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Energi Kaya",
		th: "ริชเอนเนอร์จี้"
	},

	category: "Energy",

	effect: {
		id: "Kartu ini berlaku sebagai 1 Energi {Bening} selama dikenakan pada Pokémon. Saat kartu ini dikenakan dari Kartu Pegangan pada Pokémon, ambil 4 kartu dari atas Deck sendiri.",
		th: "การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอน จะทำงานเทียบเท่าพลังงาน[ไร้สี] 1 ลูก เมื่อนำการ์ดนี้จากบนมือติดที่โปเกมอน จั่วการ์ด 4 ใบจากสำรับการ์ด ฝ่ายเรา"
	},

	energyType: "Special",
	regulationMark: "H"
}

export default card