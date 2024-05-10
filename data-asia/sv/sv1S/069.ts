import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ともだちてちょう",
		'zh-tw': "朋友手冊",
		th: "สมุดบันทึกเพื่อน",
		id: "Catatan Teman"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからサポートを2枚まで選び、相手に見せて、山札にもどして切る。",
		'zh-tw': "從自己的棄牌區選擇最多2張支援者卡，在給對手看過後放回牌庫並重洗。",
		th: "เลือกการ์ดซัพพอร์ตได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู ใส่กลับไปในสำรับการ์ดแล้วสับ",
		id: "Pilih paling banyak 2 lembar Supporter dari Trash sendiri, perlihatkan ke lawan, lalu kocok kembali ke Deck."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card