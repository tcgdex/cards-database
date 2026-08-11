import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ผ้าคาดหัวแห่งความแข็งแกร่ง [ไอเท็มติดโปเกมอน]",
		'id-id': "Ikat Kepala Semangat"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'th-th': "แดเมจของท่าต่อสู้ที่โปเกมอนที่ติดการ์ดนี้อยู่ ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+10]",
		'id-id': "Kerusakan akibat serangan yang digunakan oleh Pokémon yang mengenakan kartu ini kepada Pokémon Bertarung lawan bertambah sejumlah 10."
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card