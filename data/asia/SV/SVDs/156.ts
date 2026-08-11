import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ผู้ตัดสิน[ซัพพอร์ต]",
		'id-id': "Judge"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'th-th': "ผู้เล่นทั้งสองฝ่าย นำการ์ดบนมือของแต่ละฝ่ายทั้งหมดใส่กลับไปในสำรับการ์ดแล้วสับ หลังจากนั้น แต่ละฝ่ายจั่วการ์ด 4 ใบจากสำรับการ์ด",
		'id-id': "Kedua pemain masing-masing mengocok kembali semua Kartu Pegangan ke Deck. Setelah itu, kedua pemain masing-masing mengambil 4 kartu dari atas Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card