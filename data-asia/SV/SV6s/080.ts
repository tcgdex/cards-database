import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Abra"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		id: "Abra menggunakan kekuatan psikokinesisnya sambil tidur. Isi mimpinya dipengaruhi oleh kekuatan yang digunakan oleh Pokémon ini."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Teleporter"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini ada di Arena Bertarung. Kocok kembali Pokémon ini dan semua kartu yang dikenakannya ke Deck sendiri."
		}
	}],

	attacks: [{
		name: {
			id: "Beam"
		},

		damage: 10,
		cost: ["Psychic"]
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