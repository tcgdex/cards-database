import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โอโนนโดะ",
		id: "Fraxure"
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		th: "ใช้เขี้ยวขนาดใหญ่แล่เหยื่ออย่างประณีตเพื่อแยกส่วนที่กินกับส่วนที่เก็บ",
		id: "Fraxure menggunakan taring tebalnya untuk memotong daging mangsanya dan memisahkan bagian untuk dimakan dan disimpan."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "บรรยากาศตึงเครียด",
			id: "Perasaan Tegang"
		},

		effect: {
			th: "โปเกมอนนี้ เมื่อฝ่ายตรงข้ามนำการ์ดไอเท็มหรือการ์ดซัพพอร์ตจากบนมือออกมาใช้ จะไม่ได้รับเอฟเฟกต์นั้น",
			id: "Saat lawan memainkan Item atau Supporter dari Kartu Pegangan, Pokémon ini tidak menerima efek dari Item atau Supporter tersebut."
		}
	}],

	attacks: [{
		name: {
			th: "คลื่นมังกร",
			id: "Aura Naga"
		},

		effect: {
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด",
			id: "Buang 1 kartu dari atas Deck sendiri ke Trash."
		},

		damage: 80,
		cost: ["Fighting", "Metal"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card