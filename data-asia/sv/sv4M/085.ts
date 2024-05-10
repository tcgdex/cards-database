import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒョウタ",
		th: "เฮียวตะ"
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。自分のトラッシュから基本エネルギーを1枚選び、相手に見せて、手札に加える。",
		th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา เลือกการ์ดพลังงานพื้นฐาน 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card