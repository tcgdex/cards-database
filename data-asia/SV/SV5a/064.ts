import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "スイレンのお世話",
		'zh-tw': "水蓮的照顧",
		th: "การปรนนิบัติของซุยเรน"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモン（「ルールを持つポケモン」をのぞく）と基本エネルギーを合計3枚まで選び、相手に見せて、手札に加える。",
		'zh-tw': "從自己的棄牌區選擇寶可夢卡（「擁有規則的寶可夢」除外）與基本能量卡合計最多3張，在給對手看過後加入手牌。",
		th: "เลือกการ์ดโปเกมอน (ยกเว้น [โปเกมอนที่มีกฎ]) และการ์ดพลังงานพื้นฐานรวมกันได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card