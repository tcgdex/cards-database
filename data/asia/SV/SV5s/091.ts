import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Sableye"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		id: "Sableye membuat sarang di gua yang gelap. Pokémon ini menggunakan cakarnya yang tajam untuk menggali batu permata dan memakannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Cakar Penyayat"
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			id: "Damage Collect"
		},

		effect: {
			id: "Pilih sesukanya Token Kerusakan yang dimiliki Pokémon Cadangan lawan, lalu pindahkan ke Pokémon Bertarung lawan."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card