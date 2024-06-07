import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Roaring Moon"
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		id: "Terdapat kemungkinan Pokémon ini adalah makhluk hidup bernama Roaring Moon yang tertulis dalam jurnal ekspedisi yang penuh misteri."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Bulu Panah Pembalasan"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap lembar kartu Purba yang ada di Trash sendiri."
		},

		damage: "70+",
		cost: ["Darkness", "Darkness"]
	}, {
		name: {
			id: "Speed Wing"
		},

		damage: 120,
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card