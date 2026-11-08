import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ลูกสมุนแก๊งสตาร์[ซัพพอร์ต]",
		'id-id': "Anak Buah Tim Bintang"
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ใส่กลับไปด้านบนของสำรับการ์ดฝ่ายตรงข้าม",
		'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu kembalikan ke atas Deck lawan."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card