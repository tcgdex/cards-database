import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "อะคาเดมียามราตรี",
		'id-id': "Akademi Saat Malam"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'th-th': "ผู้เล่นทั้งสองฝ่าย ในแต่ละเทิร์นของตัวเองทำได้ 1 ครั้ง จะเลือกการ์ดบนมือฝ่ายตัวเอง 1 ใบ ใส่กลับไปด้านบนของสำรับการ์ดก็ได้",
		'id-id': "Kedua pemain 1 kali pada tiap gilirannya sendiri dapat memilih 1 lembar Kartu Pegangan sendiri, lalu mengembalikannya ke atas Deck."
	},

	trainerType: "Stadium",
	regulationMark: "H"
}

export default card