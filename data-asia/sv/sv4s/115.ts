import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Maushold ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Solid Bersatu Padu"
		},

		effect: {
			id: "Saat Pokémon ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 3 Token Kerusakan untuk tiap Tandemaus dan Maushold (termasuk Pokémon {ex}) di Arena sendiri pada Pokémon yang telah menggunakan serangan."
		}
	}],

	attacks: [{
		name: {
			id: "Gigi Kerakusan"
		},

		effect: {
			id: "Ambil 2 kartu dari atas Deck sendiri."
		},

		damage: 120,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card