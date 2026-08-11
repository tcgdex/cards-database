import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Vivillon"
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		id: "Vivillon yang terlahir di wilayah ajaib. Pokémon ini bertarung dengan menyebarkan sisik toksik berwarna-warni dari sayapnya."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Evolution Powder"
		},

		effect: {
			id: "Pilih kartu yang merupakan evolusi dari tiap-tiap Pokémon Cadangan sendiri masing-masing 1 lembar dari Deck sendiri, lalu letakkan pada tiap-tiap Pokémon tersebut untuk melakukan evolusi. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Cutter Wind"
		},

		damage: 90,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card