import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ファイトオレ",
		'zh-tw': "戰鬥牛奶",
		th: "นมชูกำลัง",
		id: "Fight Au Lait"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分のサイドの残り枚数が、相手のサイドの残り枚数より多いときにしか使えない。\n\n自分のポケモン1匹のHPを「60」回復する。",
		'zh-tw': "這張卡只有在自己剩餘獎賞卡的張數比對手剩餘獎賞卡的張數多時才可使用。 將自己的1隻寶可夢恢復「60」HP。",
		th: "การ์ดนี้ จะใช้ได้แค่ตอนที่จำนวนการ์ดรางวัลที่เหลือของฝ่ายเรา มากกว่าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้าม ฟื้นฟู HP ของโปเกมอนฝ่ายเรา 1 ตัว [60]",
		id: "Kartu ini hanya dapat digunakan saat sisa Kartu Point sendiri lebih banyak dari sisa Kartu Point lawan. Pulihkan HP 1 Pokémon sendiri sejumlah 60."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card