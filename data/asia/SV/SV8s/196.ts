import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Mesprit"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		id: "Mesprit mengajarkan perihnya rasa sedih dan pentingnya rasa senang kepada manusia. Dikenal sebagai Dewa Emosi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Memuaskan Hati"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Energi Dasar {Psychic} dari Kartu Pegangan sendiri, lalu kenakan sesukanya pada Pokémon sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "God Burst"
		},

		effect: {
			id: "Jika tidak ada Uxie dan Azelf di Cadangan sendiri, serangan ini gagal."
		},

		damage: 160,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card