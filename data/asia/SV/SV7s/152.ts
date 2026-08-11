import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ก้อนแรงดึงดูด",
		'id-id': "Manik Gravitasi‌"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'th-th': "ตราบใดที่โปเกมอนที่ติดการ์ดนี้อยู่ยังอยู่บนตำแหน่งต่อสู้ พลังงานสำหรับ[หนี]ของโปเกมอนบนตำแหน่งต่อสู้ของทั้งสองฝ่าย แต่ละตัวจะเพิ่มขึ้น 1 ลูก",
		'id-id': "Selama Pokémon yang mengenakan kartu ini ada di Arena Bertarung, Energi yang dibutuhkan oleh Pokémon Bertarung kedua pemain untuk Mundur masing-masing bertambah 1."
	},

	trainerType: "Tool",
	regulationMark: "H"
}

export default card