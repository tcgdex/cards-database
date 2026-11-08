import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Chimecho"
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'id-id': "Suara Pokémon ini menggema di rongga tubuhnya dan menghasilkan warna nada yang indah untuk mengejutkan dan mengusir musuh."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Hyper Voice"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			'id-id': "Bunyi Lonceng Pulang"
		},

		effect: {
			'id-id': "Pilih 1 Pokémon Cadangan sendiri, lalu kocok kembali Pokémon tersebut dan semua kartu yang dikenakannya ke Deck."
		},

		cost: ["Colorless", "Colorless"]
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