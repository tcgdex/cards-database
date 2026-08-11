import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เกโนเซ็กท์",
		'id-id': "Genesect"
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		'th-th': "โปเกมอนแมลงโบราณที่ถูกแก๊งพลาสมาดัดแปลง ปืนใหญ่กลางหลังมีพลังเพิ่มขึ้น",
		'id-id': "Pokémon serangga purba yang telah dimodifikasi oleh Tim Plasma. Meriam di punggung Genesect telah diperkuat."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "เอซแคนเซลเลอร์",
			'id-id': "Ace Canceler"
		},

		effect: {
			'th-th': "ถ้าโปเกมอนนี้มี [ไอเท็มติดโปเกมอน] ติดอยู่ ฝ่ายตรงข้ามไม่สามารถนำการ์ด [【ACE SPEC】] จากบนมือออกมาใช้ได้",
			'id-id': "Jika Pokémon ini mengenakan Pokémon Tool, lawan tidak dapat memainkan kartu {ACE SPEC} dari Kartu Pegangan."
		}
	}],

	attacks: [{
		name: {
			'th-th': "แมกเน็ทบลาสต์",
			'id-id': "Magnetic Blast"
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