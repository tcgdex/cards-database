import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Munkidori"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		id: "Ia memancarkan kekuatan psikokinesisnya yang menyebabkan pusing akut dan mempermainkan musuhnya sesuka hati dari tempat yang aman."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Adrenaline Brain"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini mengenakan Energi {Kegelapan}. Pilih paling banyak 3 Token Kerusakan yang dimiliki 1 Pokémon di Arena sendiri, lalu pindahkan ke 1 Pokémon di Arena lawan."
		}
	}],

	attacks: [{
		name: {
			id: "Psychotrip"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 60,
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
	regulationMark: "H"
}

export default card