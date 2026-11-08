import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ともだちてちょう",
		'zh-tw': "朋友手冊",
		'th-th': "สมุดบันทึกเพื่อน",
		'id-id': "Catatan Teman"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュからサポートを2枚まで選び、相手に見せて、山札にもどして切る。",
		'zh-tw': "從自己的棄牌區選擇最多2張支援者卡，在給對手看過後放回牌庫並重洗。",
		'th-th': "เลือกการ์ดซัพพอร์ตได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู ใส่กลับไปในสำรับการ์ดแล้วสับ",
		'id-id': "Pilih paling banyak 2 lembar Supporter dari Trash sendiri, perlihatkan ke lawan, lalu kocok kembali ke Deck."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693036,
				tcgplayer: 567186,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "G"
}

export default card