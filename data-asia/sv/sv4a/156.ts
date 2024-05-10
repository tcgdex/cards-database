import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "エレキジェネレーター",
		'zh-tw': "電氣發生器",
		th: "อิเล็กทริกเจนเนอเรเตอร์",
		id: "Electric Generator",
		'zh-cn': "電氣發生器"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から5枚見て、その中から「基本エネルギー」を2枚まで選び、ベンチのポケモンに好きなようにつける。残りのカードは山札にもどして切る。",
		'zh-tw': "查看自己的牌庫上方5張卡，從其中選擇最多2張「基本【雷】能量」卡，以任意方式附於備戰區的【雷】寶可夢身上。將剩餘卡放回牌庫並重洗。",
		th: "ดูการ์ด 5 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[สายฟ้า]] ได้สูงสุด 2 ใบจากในนั้น ติดที่โปเกมอน[สายฟ้า]บนเบนช์ตามชอบ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
		id: "Lihat 5 kartu dari atas Deck sendiri, pilih paling banyak 2 lembar Energi Dasar {Listrik} di antaranya, lalu kenakan sesukanya pada Pokémon {Listrik} di Cadangan. Kocok kembali sisa kartu ke Deck.",
		'zh-cn': "查看自己的牌庫上方5張卡，從其中選擇最多2張「基本【雷】能量」卡，以任意方式附於備戰區的【雷】寶可夢身上。將剩餘卡放回牌庫並重洗。"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card