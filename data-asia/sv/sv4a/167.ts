import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "たべのこし",
		'zh-tw': "吃剩的東西",
		th: "อาหารเหลือ",
		id: "Sisa Makanan[Pokémon Tool]",
		'zh-cn': "吃剩的東西"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "自分の番の終わりに、このカードをつけているポケモンがバトル場にいるなら、そのポケモンのHPを「20」回復する。",
		'zh-tw': "在自己的回合結束時，若附有這張卡的寶可夢在戰鬥場上，則將那隻寶可夢恢復「20」HP。",
		th: "เมื่อจบเทิร์นฝ่ายเรา ถ้าโปเกมอนที่ติดการ์ดนี้อยู่อยู่บนตำแหน่งต่อสู้ จะฟื้นฟู HP ของโปเกมอนนั้น [20]",
		id: "Pada akhir giliran sendiri, jika Pokémon yang mengenakan kartu ini ada di Arena Bertarung, pulihkan HP Pokémon tersebut sejumlah 20.",
		'zh-cn': "在自己的回合結束時，若附有這張卡的寶可夢在戰鬥場上，則將那隻寶可夢恢復「20」HP。"
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card