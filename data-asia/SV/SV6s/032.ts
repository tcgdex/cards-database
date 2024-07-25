import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Monferno"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		id: "Monferno bertarung dengan mengontrol intensitas api di ekornya secara terampil untuk menjaga musuhnya tetap berada di jarak yang ideal."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Chop"
		},

		damage: 40,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			id: "Heat Blow"
		},

		effect: {
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 80,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card