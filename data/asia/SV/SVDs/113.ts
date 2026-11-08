import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ฮาคุริว",
		'id-id': "Dragonair"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		'th-th': "ว่ากันว่าอากาศโดยรอบจะเปลี่ยนไปทันทีที่มันปล่อยออร่าออกมาจากทั่วทั้งตัว",
		'id-id': "Dikabarkan jika Dragonair mengeluarkan aura dari seluruh tubuhnya, cuaca di sekitarnya langsung berubah."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "กระแทก",
			'id-id': "Menyeruduk"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ดรากอนเทล",
			'id-id': "Dragon Tail"
		},

		effect: {
			'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x70",
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 70 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "70×",
		cost: ["Water", "Lightning"]
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card