import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เด็นจิมูชิ",
		id: "Charjabug"
	},

	illustrator: "Makura Tami",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		th: "เมื่อย่อยใบไม้ร่วงที่กินเข้าไป จะผลิตไฟฟ้าออกมาและกักเก็บไว้ มันสามารถปล่อยไฟฟ้าออกมาจากส่วนปลายของขากรรไกรได้",
		id: "Ketika mencerna daun jatuh yang telah dimakan, Pokémon ini menghasilkan listrik dan menghimpunnya. Ia mengeluarkan listrik dari ujung rahangnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "เรียงขนาน",
			id: "Berbaris Paralel"
		},

		effect: {
			th: "เลือกการ์ด [เด็นจิมูชิ] ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			id: "Pilih paling banyak 3 lembar Charjabug dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card