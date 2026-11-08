import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Solrock"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'id-id': "Energi matahari merupakan sumber energi Solrock, sehingga Pokémon ini kuat pada siang hari. Saat berputar, tubuhnya akan bercahaya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Memanggil Teman"
		},

		effect: {
			'id-id': "Pilih paling banyak 2 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Solar Beam"
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