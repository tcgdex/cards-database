import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ทัทซึเบ",
		'id-id': "Bagon"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		'th-th': "หัวที่แข็งปานเหล็กสามารถทุบหินผาแตกเป็นผงได้ มันเฝ้ารอวันที่ปีกจะ งอกออกมา",
		'id-id': "Kepala Bagon yang sekeras baja dapat menghancurkan batu sehingga hancur berkeping-keping. Pokémon ini terus menanti hingga sayapnya tumbuh."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "กัดติด",
			'id-id': "Menggigit"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ประจัญบาน",
			'id-id': "Menyerang"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 50,
		cost: ["Fire", "Water"]
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card