import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "เมดิคัลเอนเนอร์จี้",
		id: "Energi Medis"
	},

	illustrator: "5ban Graphics",
	category: "Energy",

	effect: {
		th: "การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอน จะทำงานเทียบเท่าพลังงาน[ไร้สี] 1 ลูก เมื่อนำการ์ดนี้จากบนมือติดที่โปเกมอน ฟื้นฟู HP ของโปเกมอนนั้น [30]",
		id: "Kartu ini berlaku sebagai 1 Energi {Bening} selama dikenakan pada Pokémon. Saat kartu ini dikenakan dari Kartu Pegangan pada Pokémon, pulihkan HP Pokémon tersebut sejumlah 30."
	},

	regulationMark: "G",
	energyType: "Special"
}

export default card