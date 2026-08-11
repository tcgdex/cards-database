import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เฟอร์ลองทาวน์",
		'id-id': "Kota Postwick"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'th-th': "แดเมจของท่าต่อสู้ที่ [โปเกมอนของฮ็อป] ของทั้งสองฝ่าย ใช้ทำกับโปเกมอน บนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+30]",
		'id-id': "Kerusakan akibat serangan yang digunakan oleh Pokémon Hop kedua pemain kepada Pokémon Bertarung lawan bertambah sejumlah 30."
	},

	trainerType: "Stadium",
	regulationMark: "I"
}

export default card