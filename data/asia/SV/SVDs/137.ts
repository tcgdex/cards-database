import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "สติกเกอร์พลังงาน[ไอเท็ม]",
		'id-id': "Stiker Energi"
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกการ์ดพลังงานพื้นฐาน 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์",
		'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 lembar Energi Dasar dari Trash sendiri, lalu kenakan pada Pokémon Cadangan."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card