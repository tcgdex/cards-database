import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Walking Wake"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		id: "Makhluk hidup yang buas dan penuh misteri. Ia diberi nama dari monster air yang tertera pada jurnal ekspedisi kuno."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Aurora Gain"
		},

		effect: {
			id: "Pulihkan HP Pokémon ini sejumlah 20."
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			id: "Merobek Mengombak"
		},

		effect: {
			id: "Letakkan paling banyak 9 Token Kerusakan pada Pokémon ini, serangan ini memberikan kerusakan sejumlah 20 untuk tiap Token Kerusakan yang diletakkan."
		},

		damage: "20×",
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card