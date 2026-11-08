import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ผู้ตัดสิน",
		'id-id': "Judge"
	},

	illustrator: "kantaro",
	category: "Trainer",

	effect: {
		'th-th': "ผู้เล่นทั้งสองฝ่าย นำการ์ดบนมือของแต่ละฝ่ายทั้งหมดใส่กลับไปในสำรับการ์ด แล้วสับ หลังจากนั้น แต่ละฝ่ายจั่วการ์ด 4 ใบจากสำรับการ์ด",
		'id-id': "Kedua pemain masing-masing mengocok kembali semua Kartu Pegangan ke Deck. Setelah itu, kedua pemain masing-masing mengambil 4 kartu dari atas Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card