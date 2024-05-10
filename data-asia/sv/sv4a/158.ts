import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "すごいつりざお",
		'zh-tw': "厲害釣竿",
		th: "คันเบ็ดชั้นยอด",
		id: "Kail Hiper[Item]"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンと基本エネルギーを合計3枚まで選び、相手に見せて、山札にもどして切る。",
		'zh-tw': "從自己的棄牌區選擇寶可夢卡與基本能量卡合計最多3張，在給對手看過後放回牌庫並重洗。",
		th: "เลือกการ์ดโปเกมอนและการ์ดพลังงานพื้นฐานรวมกันได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู ใส่กลับไปในสำรับการ์ดแล้วสับ",
		id: "Pilih paling banyak total 3 lembar Pokémon dan Energi Dasar dari Trash sendiri, perlihatkan ke lawan, lalu kocok kembali ke Deck."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card