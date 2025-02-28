import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ネリネ",
		id: "Nerine",
		th: "เนริเนะ",
		'zh-tw': "納莉",
		'zh-cn': "納莉"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の山札を4枚引く。このカードを使った番の終わりに、自分の手札が5枚以上あるなら、自分の手札をすべてトラッシュする。",
		id: "Ambil 4 kartu dari atas Deck sendiri. Jika pada akhir giliran digunakannya kartu ini, ada 5 lembar atau lebih kartu di Kartu Pegangan sendiri, buang semua Kartu Pegangan sendiri ke Trash.",
		th: "จั่วการ์ด 4 ใบจากสำรับการ์ดฝ่ายเรา เมื่อจบเทิร์นที่ใช้การ์ดนี้ ถ้าการ์ดบนมือ ฝ่ายเรามากกว่าหรือเท่ากับ 5 ใบ ทิ้งการ์ดบนมือฝ่ายเราทั้งหมดที่ตำแหน่ง ทิ้งการ์ด",
		'zh-tw': "從自己的牌庫抽出4張卡。在使用了這張卡的回合結束時，若自己的手牌有5張以上，則將自己的手牌全部丟棄。",
		'zh-cn': "從自己的牌庫抽出4張卡。在使用了這張卡的回合結束時，若自己的手牌有5張以上，則將自己的手牌全部丟棄。"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card