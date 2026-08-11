import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Maushold",
		'th-th': "อิกคาเนซูมิ"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'id-id': "Dua ekor Maushold besar bertarung sambil melindungi anak-anak mereka. Seluruh Pokémon ini ikut bertarung menghadapi lawan yang kuat.",
		'th-th': "ตัวใหญ่ 2 ตัวจะคอยปกป้องพวกตัวเล็กพลางต่อสู้ไปด้วย จะเผชิญหน้า กับคู่ต่อสู้ที่แข็งแกร่งด้วยกันทุกตัว"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Family March",
			'th-th': "แฟมิลีมาร์ช"
		},

		effect: {
			'id-id': "Pilih paling banyak 2 lembar Maushold (termasuk Pokémon {ex}) dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck.",
			'th-th': "เลือกการ์ด [อิกคาเนซูมิ (รวม [โปเกมอน【ex】])] ได้สูงสุด 2 ใบจากสำรับ การ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Gigi Beruntun",
			'th-th': "ฟันหน้าต่อเนื่อง"
		},

		effect: {
			'id-id': "Lempar koin 4 kali. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan.",
			'th-th': "ทอยเหรียญ 4 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30"
		},

		damage: "30×",
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