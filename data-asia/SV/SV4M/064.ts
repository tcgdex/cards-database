import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒョウタ",
		'zh-tw': "瓢太",
		th: "เฮียวตะ"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。自分のトラッシュから基本エネルギーを1枚選び、相手に見せて、手札に加える。",
		'zh-tw': "從自己的牌庫抽出2張卡。從自己的棄牌區選擇1張基本能量卡，在給對手看過後加入手牌。",
		th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา เลือกการ์ดพลังงานพื้นฐาน 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card