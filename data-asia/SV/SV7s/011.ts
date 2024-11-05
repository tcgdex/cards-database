import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "จูไนเปอร์",
		id: "Decidueye"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		th: "ใช้ลูกศรขนนกที่เก็บเอาไว้ในปีกง้างยิงฝ่ายตรงข้ามราวกับธนู มันไม่เคยยิงพลาดเป้า",
		id: "Decidueye menembakkan bulu panah yang dipasang di sayapnya bagaikan busur dan panah. Panahnya tidak akan meleset mengenai target yang dibidik."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			th: "สต็อกขนนก",
			id: "Feather Stock"
		},

		effect: {
			th: "จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 7 ใบ",
			id: "Ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 7 lembar."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "สตรองช็อต",
			id: "Strong Shot"
		},

		effect: {
			th: "ทิ้งการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากบนมือฝ่ายเราที่ตำแหน่งทิ้งการ์ด ถ้าทิ้งการ์ดไม่ได้ ท่าต่อสู้นี้จะล้มเหลว",
			id: "Buang 1 lembar Energi Dasar {Daun} dari Kartu Pegangan sendiri ke Trash. Jika tidak dapat membuangnya ke Trash, serangan ini gagal."
		},

		damage: 170,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card