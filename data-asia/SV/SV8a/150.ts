import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "むしとりセット",
		id: "Set Penangkap Serangga",
		th: "ชุดจับแมลง",
		'zh-tw': "捕蟲組合",
		'zh-cn': "捕蟲組合"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から7枚見て、その中からポケモンと「基本エネルギー」を合計2枚まで選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
		id: "Lihat 7 kartu dari atas Deck sendiri, pilih paling banyak total 2 lembar Pokémon {Daun} dan Energi Dasar {Daun} di antaranya, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kocok kembali sisa kartu ke Deck.",
		th: "ดูการ์ด 7 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดโปเกมอน[หญ้า]และการ์ด [พลังงานพื้นฐาน[หญ้า]] รวมกันได้สูงสุด 2 ใบจากในนั้น ให้ฝ่ายตรงข้ามดู นำขึ้นมือ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
		'zh-tw': "查看自己的牌庫上方7張卡，從其中選擇【草】寶可夢卡與「基本【草】能量」卡合計最多2張，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
		'zh-cn': "查看自己的牌庫上方7張卡，從其中選擇【草】寶可夢卡與「基本【草】能量」卡合計最多2張，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card