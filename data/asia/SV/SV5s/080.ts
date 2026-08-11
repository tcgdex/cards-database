import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Carkol"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		id: "Suhu tubuh Carkol meningkat jika emosinya memuncak. Pokémon ini terus berlari sambil mengembuskan api."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Menghempaskan"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 40."
		},

		damage: "20+",
		cost: ["Fighting"]
	}, {
		name: {
			id: "Rock Smash"
		},

		damage: 80,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card