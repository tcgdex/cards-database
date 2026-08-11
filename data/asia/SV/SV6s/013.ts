import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Trevenant"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		id: "Ia sangat baik terhadap Pokémon yang tinggal di hutan. Ia tidak peduli meskipun belukar di kepalanya dijadikan tempat tinggal."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Giga Drain"
		},

		effect: {
			id: "Pulihkan HP Pokémon ini sejumlah kerusakan yang diberikan kepada Pokémon Bertarung lawan."
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			id: "Forest Dump"
		},

		damage: 130,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card