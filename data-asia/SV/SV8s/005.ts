import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Scatterbug",
		th: "โคฟูคิมูชิ"
	},

	illustrator: "Iori Suzuki",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		id: "Scatterbug mengusir musuhnya dengan menyebarkan bubuk beracun. Tumbuhan yang menjadi makanannya berbeda-beda tergantung daerah tempat ia tinggal.",
		th: "โปรยผงพิษเพื่อขับไล่ศัตรู พืชที่กินเป็นอาหารจะแตกต่างกันไปตาม พื้นที่ที่อาศัยอยู่"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Memanggil Teman",
			th: "เรียกเพื่อน"
		},

		effect: {
			id: "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck.",
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้ว สับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card