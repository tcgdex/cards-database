import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ピーニャ",
		'zh-tw': "皮拿",
		th: "ปิญญา",
		id: "Nanio"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "相手のポケモン全員についている特殊エネルギーをそれぞれ1個ずつ選び、トラッシュする。",
		'zh-tw': "選擇對手的所有寶可夢身上各自附加的特殊能量各1個，將其丟棄。",
		th: "เลือกพลังงานพิเศษที่ติดอยู่กับโปเกมอนฝ่ายตรงข้ามทุกตัว แต่ละตัวตัวละ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
		id: "Pilih Energi Spesial yang dikenakan pada semua Pokémon lawan masing-masing 1, lalu buang ke Trash."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card