import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "รีเวอร์ซัลเอนเนอร์จี้ [พลังงานพิเศษ]",
		id: "Energi Reversal"
	},

	category: "Energy",

	effect: {
		th: "การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอน จะทำงานเทียบเท่าพลังงาน[ไร้สี] 1 ลูก ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายเรา มากกว่าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้าม การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอนวิวัฒนาการ (ยกเว้น [โปเกมอนที่มีกฎ]) จะทำงานเทียบเท่าพลังงานทุกประเภท 3 ลูก",
		id: "Kartu ini berlaku sebagai 1 Energi {Bening} selama dikenakan pada Pokémon. Jika sisa Kartu Point sendiri lebih banyak dari sisa Kartu Point lawan, kartu ini berlaku sebagai 3 Energi semua tipe selama dikenakan pada Pokémon Evolusi (selain Pokémon yang memiliki Peraturan)."
	},

	regulationMark: "G",
	energyType: "Special"
}

export default card