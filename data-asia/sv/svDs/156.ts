import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "ผู้ตัดสิน[ซัพพอร์ต]",
		id: "Judge"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		th: "ผู้เล่นทั้งสองฝ่าย นำการ์ดบนมือของแต่ละฝ่ายทั้งหมดใส่กลับไปในสำรับการ์ดแล้วสับ หลังจากนั้น แต่ละฝ่ายจั่วการ์ด 4 ใบจากสำรับการ์ด",
		id: "Kedua pemain masing-masing mengocok kembali semua Kartu Pegangan ke Deck. Setelah itu, kedua pemain masing-masing mengambil 4 kartu dari atas Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card