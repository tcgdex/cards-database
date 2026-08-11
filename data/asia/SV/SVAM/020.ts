import { Card } from "../../../interfaces"
import Set from "../SVAM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "裁判",
		th: "ผู้ตัดสิน",
		id: "Judge"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'zh-tw': "雙方玩家各自將手牌全部放回牌庫並重洗。然後，各自從牌庫抽出4張卡。",
		th: "ผู้เล่นทั้งสองฝ่าย นำการ์ดบนมือของแต่ละฝ่ายทั้งหมดใส่กลับไปในสำรับการ์ดแล้วสับ หลังจากนั้น แต่ละฝ่ายจั่วการ์ด 4 ใบจากสำรับการ์ด",
		id: "Kedua pemain masing-masing mengocok kembali semua Kartu Pegangan ke Deck. Setelah itu, kedua pemain masing-masing mengambil 4 kartu dari atas Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card