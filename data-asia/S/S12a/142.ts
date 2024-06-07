import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "救援行李箱",
		th: "เรสคิวแครี่",
		ja: "レスキューキャリー"
	},

	illustrator: "Amelicart",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的棄牌區選擇最多2張HP為「90」以下的寶可夢卡，在給對手看過後加入手牌。",
		th: "เลือกการ์ดโปเกมอนที่มี HP ไม่เกิน [90] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู แล้วนำขึ้นมือ",
		ja: "自分のトラッシュからHPが「90」以下のポケモンを2枚まで選び、相手に見せて、手札に加える。"
	},

	trainerType: "Item",
	regulationMark: "E"
}

export default card