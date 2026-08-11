import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Cofagrigus ex"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Peti Mati Keemasan"
		},

		effect: {
			id: "Saat Pokémon ini KO karena menerima kerusakan akibat serangan dari Pokémon lawan, pilih 1 kartu sesukanya dari Deck sendiri, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		name: {
			id: "Hollow Hands"
		},

		effect: {
			id: "Letakkan sejumlah 5 Token Kerusakan pada Pokémon Cadangan lawan sesukanya."
		},

		damage: 110,
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

	retreat: 2,
	regulationMark: "G"
}

export default card