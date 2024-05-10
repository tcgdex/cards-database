import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Poochyena"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		id: "Pokémon yang bersifat keras hati. Poochyena mengejar-ngejar mangsa yang ditargetkan hingga mangsa tersebut letih dan kelelahan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menggerogoti Habis"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
		},

		damage: "30+",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card