import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "ฮาคุริว",
		id: "Dragonair"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		th: "ว่ากันว่าอากาศโดยรอบจะเปลี่ยนไปทันทีที่มันปล่อยออร่าออกมาจากทั่วทั้งตัว",
		id: "Dikabarkan jika Dragonair mengeluarkan aura dari seluruh tubuhnya, cuaca di sekitarnya langsung berubah."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "กระแทก",
			id: "Menyeruduk"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			th: "ดรากอนเทล",
			id: "Dragon Tail"
		},

		effect: {
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x70",
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 70 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "70×",
		cost: ["Water", "Lightning"]
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card