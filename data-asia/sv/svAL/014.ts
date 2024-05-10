import { Card } from "../../../interfaces"
import Set from "../svAL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "神奇糖果",
		th: "ลูกอมประหลาด",
		id: "Permen Langka"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的手牌選擇1張【2階進化】寶可夢卡，放置於自己的場上的可進化成那隻寶可夢的【基礎】寶可夢身上，跳過【1階進化】完成進化。（無法對自己的最初回合或剛使出的寶可夢使用。）",
		th: "เลือกการ์ดโปเกมอน[ร่าง2] 1 ใบจากบนมือฝ่ายเรา วางบนโปเกมอน[พื้นฐาน]บนกระดานฝ่ายเราที่จะวิวัฒนาการเป็นโปเกมอนนั้น เพื่อให้วิวัฒนาการโดยข้าม[ร่าง1] ได้เลย (ไม่สามารถใช้ได้กับเทิร์นแรกสุดของฝ่ายเรา และโปเกมอนที่เพิ่งออกมา)",
		id: "Pilih 1 lembar Pokémon Stage 2 dari Kartu Pegangan sendiri, lalu letakkan ke Pokémon Basic di Arena sendiri yang berevolusi menjadi Pokémon tersebut, lakukan evolusi tanpa perlu melakukan evolusi Stage 1. (Tidak dapat digunakan pada giliran pertama pemain dan pada Pokémon yang baru dimasukkan.)"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card