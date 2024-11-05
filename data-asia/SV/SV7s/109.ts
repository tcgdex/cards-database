import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เกโนเซ็กท์",
		id: "Genesect"
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		th: "โปเกมอนแมลงโบราณที่ถูกแก๊งพลาสมาดัดแปลง ปืนใหญ่กลางหลังมีพลังเพิ่มขึ้น",
		id: "Pokémon serangga purba yang telah dimodifikasi oleh Tim Plasma. Meriam di punggung Genesect telah diperkuat."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			th: "เอซแคนเซลเลอร์",
			id: "Ace Canceler"
		},

		effect: {
			th: "ถ้าโปเกมอนนี้มี [ไอเท็มติดโปเกมอน] ติดอยู่ ฝ่ายตรงข้ามไม่สามารถนำการ์ด [【ACE SPEC】] จากบนมือออกมาใช้ได้",
			id: "Jika Pokémon ini mengenakan Pokémon Tool, lawan tidak dapat memainkan kartu {ACE SPEC} dari Kartu Pegangan."
		}
	}],

	attacks: [{
		name: {
			th: "แมกเน็ทบลาสต์",
			id: "Magnetic Blast"
		},

		damage: 100,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card