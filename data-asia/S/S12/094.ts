import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "神代",
		th: "จินได",
		ja: "ジンダイ"
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡只有在自己的手牌只有這1張時才可使用。從自己的牌庫抽出與雙方的備戰寶可夢相同數量的卡。",
		th: "การ์ดนี้ จะใช้ได้แค่ตอนที่การ์ดบนมือฝ่ายเรามีการ์ดนี้เพียง 1 ใบเท่านั้น จั่วการ์ดจากสำรับการ์ดฝ่ายเราตามจำนวนโปเกมอนบนเบนช์ของทั้งสองฝ่าย",
		ja: "このカードは、自分の手札がこのカード1枚だけのときにしか使えない。\n\nおたがいのベンチポケモンの数ぶん、自分の山札を引く。"
	},

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon"
}

export default card