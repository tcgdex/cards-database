import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "フトゥー博士のシナリオ",
		th: "แผนการของศาสตราจารย์ฟูทูร์"
	},

	illustrator: "Atsushi Furusawa",
	category: "Trainer",

	effect: {
		ja: "自分の場のポケモンを1匹選び、手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。）",
		th: "เลือกโปเกมอนบนกระดานฝ่ายเรา 1 ตัว นำกลับขึ้นมือ (ทิ้งการ์ดทุกใบที่ไม่ใช่โปเกมอนที่ตำแหน่งทิ้งการ์ด)"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card