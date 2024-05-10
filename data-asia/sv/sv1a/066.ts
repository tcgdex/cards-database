import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "キハダ",
		'zh-tw': "凰檗",
		th: "คิฮาดะ",
		id: "Amura"
	},

	illustrator: "yuu",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の手札を1枚選び、山札の下にもどす。その後、自分の手札が5枚になるように、山札を引く。（自分の手札がこのカード1枚だけなら、このカードは使えない。）",
		'zh-tw': "選擇1張自己的手牌，放回牌庫下方。然後，從牌庫抽卡直到自己的手牌滿5張為止。（若自己的手牌只有這1張，則無法使用這張卡。）",
		th: "เลือกการ์ดบนมือฝ่ายเรา 1 ใบ ใส่กลับไปด้านล่างของสำรับการ์ด หลังจากนั้น จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 5 ใบ (ถ้าการ์ดบนมือฝ่ายเราเหลือเพียงแค่การ์ดนี้ 1 ใบ การ์ดนี้จะใช้ไม่ได้)",
		id: "Pilih 1 lembar Kartu Pegangan sendiri, lalu kembalikan ke bawah Deck. Setelah itu, ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 5 lembar. (Jika Kartu Pegangan sendiri hanya 1 kartu ini saja, kartu ini tidak dapat digunakan.)"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card