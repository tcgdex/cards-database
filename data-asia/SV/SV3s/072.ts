import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Greavard"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		id: "Dikatakan bahwa Greavard adalah reinkarnasi Pokémon anjing liar yang meninggal tanpa pernah berinteraksi dengan manusia."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Main Kasar"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 30."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card