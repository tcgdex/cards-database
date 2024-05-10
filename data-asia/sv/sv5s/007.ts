import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Breloom"
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		id: "Bibit pada ekor Breloom terbuat dari spora beracun. Pokémon ini mengalahkan musuh dengan pukulan cepat yang tak kasat mata."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Pukulan"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Knuckle Impact"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 120,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card