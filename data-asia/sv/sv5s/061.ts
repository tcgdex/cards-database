import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Bronzong"
	},

	illustrator: "Katsunori Sato",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		id: "Bronzong dipuja sejak zaman dahulu sebagai Pokémon pemanggil awan hujan. Kadang Pokémon ini terkubur di permukaan tanah."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Pengacak Evolusi"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, lawan tidak dapat melakukan evolusi dengan memasukkan Pokémon dari Kartu Pegangan."
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			id: "Psikokinesis Super"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card