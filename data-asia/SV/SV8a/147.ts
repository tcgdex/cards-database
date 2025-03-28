import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "なかよしポフィン",
		id: "Poffin Bersahabat",
		th: "โปฟฟินมิตรภาพ",
		'zh-tw': "好友寶芬",
		'zh-cn': "好友寶芬"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の山札から、HPが「70」以下のたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
		id: "Pilih paling banyak 2 lembar Pokémon Basic dengan HP 70 atau kurang dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck.",
		th: "เลือกการ์ดโปเกมอน[พื้นฐาน]ที่มี HP น้อยกว่าหรือเท่ากับ [70] ได้สูงสุด 2 ใบ จากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
		'zh-tw': "從自己的牌庫選擇最多2張HP為「70」以下的【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
		'zh-cn': "從自己的牌庫選擇最多2張HP為「70」以下的【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card