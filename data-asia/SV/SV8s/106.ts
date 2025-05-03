import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Excadrill",
		th: "โดริวซึ"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		id: "Bor Excadrill yang berevolusi menjadi baja memiliki kekuatan untuk menembus papan besi. Pokémon ini berandil besar dalam konstruksi terowongan.",
		th: "สว่านที่มีวิวัฒนาการจนเป็นเหล็กกล้านั้นมีพลังทำลายล้างขนาดทะลวง แผ่นเหล็กได้ มีประโยชน์ยิ่งในงานก่อสร้างอุโมงค์"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Cakar Penggali Lubang",
			th: "กรงเล็บนักขุด"
		},

		effect: {
			id: "Buang 1 kartu dari atas Deck lawan ke Trash.",
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Drill Smash",
			th: "ดริลสแมช"
		},

		effect: {
			id: "Jika ada Pokémon {Logam} di Cadangan sendiri, kerusakan yang diberikan bertambah sejumlah 80.",
			th: "ถ้าบนเบนช์ฝ่ายเรามีโปเกมอน[โลหะ]อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 80"
		},

		damage: "60+",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card