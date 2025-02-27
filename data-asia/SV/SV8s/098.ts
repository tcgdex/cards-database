import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Paldean Tauros",
		th: "พัลเดีย เคนเทารอส"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		id: "Otot tebal bertenaga dan sifatnya yang kasar adalah karakteristiknya. Pokémon ini dikenal sebagai Tauros Varian Tempur.",
		th: "จุดเด่นคือกล้ามเนื้อหนาอันทรงพลังและอารมณ์ที่รุนแรง เรียกกันว่า พันธุ์ประจัญบาน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tendangan Penghempas",
			th: "ดีด"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			id: "Block Stomp",
			th: "บล็อกแสตมป์"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon Basic yang menerima serangan ini tidak dapat menggunakan serangan.",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอน[พื้นฐาน]ที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ ไม่ได้"
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card