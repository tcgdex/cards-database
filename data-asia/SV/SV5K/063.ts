import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "なかよしポフィン",
		'zh-tw': "好友寶芬",
		th: "โปฟฟินมิตรภาพ"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札から、HPが「70」以下のたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇最多2張HP為「70」以下的【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
		th: "เลือกการ์ดโปเกมอน[พื้นฐาน]ที่มี HP น้อยกว่าหรือเท่ากับ [70] ได้สูงสุด 2 ใบ จากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card