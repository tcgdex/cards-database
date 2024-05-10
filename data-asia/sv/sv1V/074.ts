import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "カエデ",
		'zh-tw': "阿楓",
		th: "คาเอเดะ",
		id: "Sera"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードを使ったら、自分の番は終わる。\n\n自分の手札をすべて山札にもどして切る。その後、山札を8枚引く。",
		'zh-tw': "若使用了這張卡，則自己的回合結束。將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出8張卡。",
		th: "เมื่อใช้การ์ดนี้แล้ว จะจบเทิร์นฝ่ายเรา นำการ์ดบนมือฝ่ายเราทั้งหมดใส่กลับไปในสำรับการ์ดแล้วสับ หลังจากนั้น จั่วการ์ด 8 ใบจากสำรับการ์ด",
		id: "Giliran pemain akan selesai jika menggunakan kartu ini. Kocok kembali semua Kartu Pegangan sendiri ke Deck. Setelah itu, ambil 8 kartu dari atas Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card