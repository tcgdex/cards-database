import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "อิชิซึไม",
		id: "Dwebble"
	},

	illustrator: "Kanami Ogata",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		th: "ถ้าหากหาหินเล็กขนาดพอเหมาะที่จะทำเป็นที่อยู่ไม่ได้ บางทีก็จะเข้า ไปอาศัยอยู่ในโพรงของคาบัลดอน",
		id: "Jika tidak menemukan batu kecil yang cocok untuk dijadikan rumah, kadang ada Dwebble yang tinggal di lubang tubuh Hippowdon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ปลุกพลัง",
			id: "Kebangkitan"
		},

		effect: {
			th: "เลือกการ์ดที่จะวิวัฒนาการจากโปเกมอนนี้ 1 ใบจากสำรับการ์ดฝ่ายเรา วาง บนโปเกมอนนี้เพื่อวิวัฒนาการ แล้วสับสำรับการ์ด",
			id: "Pilih 1 kartu dari Deck sendiri yang merupakan evolusi dari Pokémon ini, lalu letakkan pada Pokémon ini untuk melakukan evolusi. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card