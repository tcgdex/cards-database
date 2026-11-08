import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Iron Thorns ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Initialize"
		},

		effect: {
			'id-id': "Selama Pokémon ini ada di Arena Bertarung, Pokémon yang memiliki Peraturan (selain Pokémon Futur) di Arena kedua pemain menjadi tidak memiliki Ability."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Bolt Cyclone"
		},

		effect: {
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu pindahkan ke Pokémon Cadangan."
		},

		damage: 140,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card