import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "タロ",
		id: "Tara",
		th: "ทาโร่",
		'zh-tw': "紫竽",
		'zh-cn': "紫竽"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべて山札にもどして切る。その後、山札を4枚引く。相手のサイドの残り枚数が3枚以下なら、引く枚数は8枚になる。",
		id: "Kocok kembali semua Kartu Pegangan sendiri ke Deck. Setelah itu, ambil 4 kartu dari atas Deck. Jika sisa Kartu Point lawan adalah 3 lembar atau kurang, jumlah kartu yang diambil menjadi 8 lembar.",
		th: "นำการ์ดบนมือฝ่ายเราทั้งหมดใส่กลับไปในสำรับการ์ดแล้วสับ หลังจากนั้น จั่วการ์ด 4 ใบจากสำรับการ์ด ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้ามน้อยกว่าหรือเท่ากับ 3 ใบ จำนวนการ์ดที่จั่วจะเป็น 8 ใบ",
		'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出4張卡。若對手剩餘獎賞卡的張數為3張以下，則改爲抽出8張卡。",
		'zh-cn': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出4張卡。若對手剩餘獎賞卡的張數為3張以下，則改爲抽出8張卡。"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card