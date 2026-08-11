import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Aipom"
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		id: "Aipom mencari ada tidaknya mangsa dari atas pohon. Semangat Pokémon ini bergejolak jika melihat makanan favoritnya, Bounsweet, dan akan melompat menyerbunya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mencopet"
		},

		effect: {
			id: "Ambil 1 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Tampar"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card