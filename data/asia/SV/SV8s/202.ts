import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Flapple"
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	description: {
		id: "Pokémon ini memperbaiki apel dengan cairan tubuhnya. Apel milik Flapple yang kuat dan berpengalaman dalam pertarungan berwarna coklat tanah liat secara menyeluruh."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Sour Spit"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
		},

		damage: "20×",
		cost: ["Colorless"]
	}, {
		name: {
			id: "Terbang Cepat"
		},

		damage: 70,
		cost: ["Grass", "Fire"]
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card