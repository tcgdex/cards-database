import { Card } from "models/database/card"
import Set from "../SVAL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "寶可裝置3.0",
		'th-th': "โปเกเกีย 3.0",
		'id-id': "Pokégear 3.0"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'zh-tw': "查看自己的牌庫上方7張卡，從其中選擇1張支援者卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
		'th-th': "ดูการ์ด 7 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดซัพพอร์ต 1 ใบจากในนั้น ให้ฝ่ายตรงข้ามดู นำขึ้นมือ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
		'id-id': "Lihat 7 kartu dari atas Deck sendiri, pilih 1 lembar Supporter di antaranya, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kocok kembali sisa kartu ke Deck."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card