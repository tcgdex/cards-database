import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Magneton"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		id: "Magneton terbentuk dari Magnemite yang menyatu. Dikatakan bahwa pada saat banyak bintik matahari, Pokémon ini akan bermunculan dalam jumlah yang banyak."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Pelepasan Listrik Berlebihan"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pokémon ini KO jika menggunakan Ability ini. Pilih paling banyak 3 lembar Energi Dasar dari Trash sendiri, lalu kenakan sesukanya pada Pokémon {Listrik} sendiri."
		}
	}],

	attacks: [{
		name: {
			id: "Lightning Ball"
		},

		damage: 40,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card