import { Card } from "../../../interfaces"
import Set from "../SVHM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大師球",
		th: "มาสเตอร์บอล",
		id: "Bola Master"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		th: "เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
		id: "Pilih 1 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card