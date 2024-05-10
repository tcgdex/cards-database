import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "リップ",
		'zh-tw': "莉普",
		th: "ลิป"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンと「基本エネルギー」を合計4枚まで選び、相手に見せて、手札に加える。",
		'zh-tw': "從自己的棄牌區選擇【超】寶可夢卡與「基本【超】能量」卡合計最多4張，在給對手看過後加入手牌。",
		th: "เลือกการ์ดโปเกมอน[พลังจิต]และการ์ด [พลังงานพื้นฐาน[พลังจิต]] รวมกันได้สูงสุด 4 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card