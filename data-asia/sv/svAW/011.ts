import { Card } from "../../../interfaces"
import Set from "../svAW"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "能量回收",
		th: "กู้คืนพลังงาน",
		id: "Pemulihan Energi"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的棄牌區選擇最多2張基本能量卡，在給對手看過後加入手牌。",
		th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
		id: "Pilih paling banyak 2 lembar Energi Dasar dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card