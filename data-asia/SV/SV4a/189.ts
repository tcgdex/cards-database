import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "リバーサルエネルギー",
		'zh-tw': "反轉能量",
		th: "รีเวอร์ซัลเอนเนอร์จี้",
		id: "Energi Reversal[Energi Spesial]"
	},

	category: "Energy",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、エネルギー1個ぶんとしてはたらく。\n\n自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、このカードは、進化ポケモン（「ルールを持つポケモン」をのぞく）についているかぎり、すべてのタイプのエネルギー3個ぶんとしてはたらく。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 若自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則只要這張卡附於進化寶可夢（「擁有規則的寶可夢」除外）身上，視為提供3個所有屬性的能量。",
		th: "การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอน จะทำงานเทียบเท่าพลังงาน[ไร้สี] 1 ลูก ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายเรา มากกว่าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้าม การ์ดนี้ ตราบใดที่ติดอยู่กับโปเกมอนวิวัฒนาการ (ยกเว้น [โปเกมอนที่มีกฎ]) จะทำงานเทียบเท่าพลังงานทุกประเภท 3 ลูก",
		id: "Kartu ini berlaku sebagai 1 Energi {Bening} selama dikenakan pada Pokémon. Jika sisa Kartu Point sendiri lebih banyak dari sisa Kartu Point lawan, kartu ini berlaku sebagai 3 Energi semua tipe selama dikenakan pada Pokémon Evolusi (selain Pokémon yang memiliki Peraturan)."
	},

	energyType: "Special",
	regulationMark: "G"
}

export default card