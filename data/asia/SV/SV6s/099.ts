import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Hisuian Growlithe"
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		id: "Growlithe berpatroli secara berpasangan di wilayah teritorialnya. Diduga bahwa bercampurnya unsur batuan beku vulkanis di bulunya terjadi karena aktivitas gunung berapi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Bakar Bulat-bulat"
		},

		effect: {
			id: "Buang Stadium yang ada di Arena ke Trash."
		}
	}, {
		name: {
			id: "Menerjang"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card