import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Alolan Exeggutor ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 300,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Tropical Fever"
		},

		effect: {
			id: "Pilih sesukanya Energi Dasar dari Kartu Pegangan sendiri, lalu kenakan sesukanya pada Pokémon sendiri."
		},

		damage: 150,
		cost: ["Grass", "Water"]
	}, {
		name: {
			id: "Swinging Sphene"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, Pokémon Basic di Arena Bertarung lawan KO. Jika hasilnya sisi belakang, pilih 1 Pokémon Basic di Cadangan lawan, Pokémon tersebut KO."
		},

		cost: ["Grass", "Water", "Fighting"]
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card