import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Solrock"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		id: "Energi matahari merupakan sumber energi Solrock, sehingga Pokémon ini kuat pada siang hari. Saat berputar, tubuhnya akan bercahaya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Memanggil Teman"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Solar Beam"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
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
	regulationMark: "G"
}

export default card