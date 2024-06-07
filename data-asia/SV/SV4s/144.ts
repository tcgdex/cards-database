import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Scream Tail"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		id: "Laporan melihat Pokémon ini hanya ada 1 di masa lalu. Sosoknya mirip dengan makhluk hidup misterius yang tertera dalam jurnal ekspedisi kuno."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menampar"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			id: "Berteriak Meraung-raung"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 20 kepada 1 Pokémon lawan untuk tiap Token Kerusakan yang dimiliki Pokémon ini. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

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
	regulationMark: "G"
}

export default card