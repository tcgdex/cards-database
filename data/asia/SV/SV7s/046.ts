import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "บาชูรุ",
		id: "Joltik"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],

	description: {
		th: "เพราะผลิตไฟฟ้าด้วยตัวเองไม่ได้ จึงมักเกาะโปเกมอนขนาดใหญ่เพื่อดูดเอาประจุไฟฟ้าสถิต",
		id: "Joltik tidak dapat menghasilkan listrik sendiri sehingga Pokémon ini menempel pada Pokémon besar lain dan menyerap listrik statis."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "บาชูชาร์จ",
			id: "Jolt Charge"
		},

		effect: {
			th: "เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] และการ์ด [พลังงานพื้นฐาน[สายฟ้า]] ได้สูงสุดอย่างละ 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเราตามชอบ แล้วสับสำรับการ์ด",
			id: "Pilih Energi Dasar {Daun} dan Energi Dasar {Listrik} masing-masing paling banyak 2 lembar dari Deck sendiri, lalu kenakan sesukanya pada Pokémon sendiri. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card