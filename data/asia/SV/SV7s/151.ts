import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โมจิอันทุ",
		'id-id': "Moci Rantai‌"
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		'th-th': "แดเมจของท่าต่อสู้ที่โปเกมอนที่เป็นสภาวะ[พิษ]ที่ติดการ์ดนี้อยู่ ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+40]",
		'id-id': "Kerusakan akibat serangan yang digunakan oleh Pokémon yang mengalami kondisi Racun dan mengenakan kartu ini kepada Pokémon Bertarung lawan bertambah sejumlah 40."
	},

	trainerType: "Tool",
	regulationMark: "H"
}

export default card