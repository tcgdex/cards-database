import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Forretress"
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		id: "Forretress menyelimuti dirinya dengan cangkang yang keras seperti baja. Wujud asli di dalamnya tidak diketahui."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Meriam Duri"
		},

		effect: {
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "30×",
		cost: ["Metal"]
	}, {
		name: {
			id: "Serudukan Baja"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 40."
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card