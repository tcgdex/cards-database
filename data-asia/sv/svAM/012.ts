import { Card } from "../../../interfaces"
import Set from "../svAM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "能量轉移",
		th: "สลับการ์ดพลังงาน",
		id: "Pengalih Energi"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "選擇1個自己的場上寶可夢身上附加的基本能量，改附於自己的其他寶可夢身上。",
		th: "เลือกพลังงานพื้นฐานที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเรา 1 ลูก ย้ายไปติดกับโปเกมอนตัวอื่นของฝ่ายเรา",
		id: "Pilih 1 Energi Dasar yang dikenakan pada Pokémon di Arena sendiri, lalu pindahkan ke Pokémon sendiri lainnya."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card