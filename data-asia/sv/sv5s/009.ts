import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Roserade"
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		id: "Roserade membuat lawan bingung dengan aroma bunganya yang harum dan memukul lawan secara bertubi-tubi dengan pecut durinya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Jarum Racun"
		},

		effect: {
			id: "Saat Pokémon ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, ubah kondisi Pokémon yang telah menggunakan serangan menjadi Racun."
		}
	}],

	attacks: [{
		name: {
			id: "Menjerat"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card