import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "たべのこし",
		'zh-tw': "吃剩的東西",
		th: "อาหารเหลือ",
		id: "Sisa Makanan"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の番の終わりに、このカードをつけているポケモンがバトル場にいるなら、そのポケモンのHPを「20」回復する。",
		'zh-tw': "在自己的回合結束時，將附有這張卡的戰鬥寶可夢恢復「20」HP。",
		th: "เมื่อจบเทิร์นฝ่ายเรา ถ้าโปเกมอนที่ติดการ์ดนี้อยู่อยู่บนตำแหน่งต่อสู้ จะฟื้นฟู HP ของโปเกมอนนั้น [20]",
		id: "Pada akhir giliran sendiri, jika Pokémon yang mengenakan kartu ini ada di Arena Bertarung, pulihkan HP Pokémon tersebut sejumlah 20."
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card