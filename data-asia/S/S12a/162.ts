import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美蓉",
		th: "เมลอน",
		ja: "メロン"
	},

	illustrator: "take",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的棄牌區選擇1張【水】能量卡，附於自己的「寶可夢【V】」身上。然後，從自己的牌庫抽出3張卡。",
		th: "เลือกการ์ดพลังงาน [น้ำ] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่ [โปเกมอน [V] ] ฝ่ายเรา หลังจากนั้น จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา",
		ja: "自分のトラッシュからエネルギーを1枚選び、自分の「ポケモンV」につける。その後、自分の山札を3枚引く。"
	},

	trainerType: "Supporter",
	regulationMark: "E"
}

export default card