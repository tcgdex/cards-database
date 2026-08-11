import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Chimchar"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		id: "Api di bagian belakang Chimchar menggunakan bahan bakar gas yang dibuat di dalam perutnya. Meskipun kehujanan, api tersebut tidak akan padam."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Meniupkan Api"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
		},

		damage: "20+",
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card