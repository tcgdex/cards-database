import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "โปเกมอนแคชเชอร์[ไอเท็ม]",
		id: "Pokémon Catcher"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้",
		id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card