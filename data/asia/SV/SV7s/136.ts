import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ทริมเมียน",
		id: "Furfrou"
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		th: "หากตัดแต่งขนที่ยุ่งเหยิงของมัน นอกจากรูปลักษณ์ภายนอกจะดูสง่างามขึ้นแล้ว ความคล่องตัวยังสูงขึ้นอีกด้วย",
		id: "Jika memangkas bulu Furfrou yang berantakan, bukan hanya wujudnya yang menjadi cantik, tetapi kecekatannya juga menjadi makin bagus."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เอนเนอร์จี้แอสซิสต์",
			id: "Energy Assist"
		},

		effect: {
			th: "เลือกการ์ดพลังงานพื้นฐาน 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์",
			id: "Pilih 1 lembar Energi Dasar dari Trash sendiri, lalu kenakan pada Pokémon Cadangan."
		},

		damage: 30,
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