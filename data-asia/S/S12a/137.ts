import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "健行鞋",
		th: "รองเท้าเดินป่า",
		ja: "トレッキングシューズ"
	},

	illustrator: "Amelicart",
	category: "Trainer",

	effect: {
		'zh-tw': "查看自己的牌庫上方1張卡，將那張卡加入手牌。或者將那張卡丟棄，從自己的牌庫抽出1張卡。",
		th: "ดูการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา นำการ์ดนั้นขึ้นมือ หรือทิ้งการ์ดนั้นที่ตำแหน่งทิ้งการ์ด และจั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
		ja: "自分の山札を上から1枚見て、そのカードを手札に加える。または、そのカードをトラッシュし、自分の山札を1枚引く。"
	},

	trainerType: "Item",
	regulationMark: "F"
}

export default card