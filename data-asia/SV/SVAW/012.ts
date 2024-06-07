import { Card } from "../../../interfaces"
import Set from "../SVAW"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "能量輸送",
		th: "ส่งต่อพลังงาน",
		id: "Transfer Energi"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫選擇1張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
		th: "เลือกการ์ดพลังงานพื้นฐาน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
		id: "Pilih 1 lembar Energi Dasar dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card