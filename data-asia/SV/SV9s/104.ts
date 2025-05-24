import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ทัทซึเบ",
		id: "Bagon"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		th: "หัวที่แข็งปานเหล็กสามารถทุบหินผาแตกเป็นผงได้ มันเฝ้ารอวันที่ปีกจะ งอกออกมา",
		id: "Kepala Bagon yang sekeras baja dapat menghancurkan batu sehingga hancur berkeping-keping. Pokémon ini terus menanti hingga sayapnya tumbuh."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "กัดติด",
			id: "Menggigit"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			th: "ประจัญบาน",
			id: "Menyerang"
		},

		effect: {
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 50,
		cost: ["Fire", "Water"]
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card