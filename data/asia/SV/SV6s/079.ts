import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Clefable"
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		id: "Pendengarannya bagus. Ia dapat membedakan dengan baik bunyi jarum yang jatuh pada tempat berjarak 1 km jauhnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Goyang Jari"
		},

		effect: {
			id: "Pilih 1 serangan yang dimiliki Pokémon Bertarung lawan, lalu gunakan sebagai serangan ini."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Magical Shot"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card