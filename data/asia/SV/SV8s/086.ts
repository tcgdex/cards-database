import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Oricorio",
		th: "โอโดริโดริ"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		id: "Wujud Oricorio yang mengisap Nektar Merah Muda. Pokémon ini meningkatkan mentalitasnya dengan stepnya yang lemah lembut, lalu melepaskan kekuatan psikokinesis.",
		th: "ร่างที่ดูดน้ำหวานสีชมพู ขัดเกลาให้สมาธิสูงขึ้นด้วยจังหวะการเต้นที่ สบาย ๆ และปล่อยพลังจิต"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Energy Assist",
			th: "‌เอนเนอร์จี้แอสซิสต์"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Energi Dasar dari Trash sendiri, lalu kenakan pada 1 Pokémon Cadangan.",
			th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่ โปเกมอนบนเบนช์ 1 ตัว"
		},

		cost: ["Psychic"]
	}, {
		name: {
			id: "Tarian Menggoda",
			th: "ระบำพิศวง"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing.",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card