import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เอเลบู",
		id: "Electabuzz"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		th: "งานวิจัยที่ให้เอเลบูกักเก็บสายฟ้าเอาไว้เพื่อให้สามารถใช้งานเมื่อใดก็ได้นั้นกำลังคืบหน้า",
		id: "Tengah dilakukan penelitian dengan menghimpun guntur ke Electabuzz agar dapat digunakan kapan pun."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "รวบรวม",
			id: "Mengumpulkan"
		},

		effect: {
			th: "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			id: "Ambil 1 kartu dari atas Deck sendiri."
		},

		cost: ["Lightning"]
	}, {
		name: {
			th: "แมกนัมพันช์",
			id: "Magnum Punch"
		},

		damage: 40,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card