import { Card } from "../../../interfaces"
import Set from "../svHK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "奇樹",
		th: "นันจาโม",
		id: "Mistika"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'zh-tw': "雙方玩家各將自己的手牌全部翻回反面並重洗，放回牌庫下方。然後，各從牌庫抽出與自己剩餘獎賞卡的張數相同數量的卡。",
		th: "ผู้เล่นทั้งสองฝ่าย แต่ละฝ่ายสับการ์ดบนมือฝ่ายตัวเองทั้งหมดโดยไม่ดูหน้าการ์ด ใส่กลับไปด้านล่างของสำรับการ์ด หลังจากนั้น แต่ละฝ่ายจั่วการ์ดจากสำรับการ์ด ตามจำนวนการ์ดรางวัลที่เหลือของฝ่ายตัวเอง",
		id: "Kedua pemain masing-masing mengocok semua Kartu Pegangan sendiri dengan sisi depan menghadap ke bawah, lalu mengembalikannya ke bawah Deck. Setelah itu, kedua pemain masing-masing mengambil kartu dari atas Deck untuk tiap lembar sisa Kartu Point sendiri."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card