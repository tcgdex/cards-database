import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Okidogi"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'id-id': "Pokémon yang kasar dan mudah marah. Ia memukul habis segalanya dengan mengayunkan rantai di lehernya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Adrenaline Power"
		},

		effect: {
			'id-id': "Jika Pokémon ini mengenakan Energi {Kegelapan}, HP maksimal Pokémon ini bertambah sejumlah 100 dan kerusakan akibat serangan yang digunakan oleh Pokémon ini kepada Pokémon Bertarung lawan bertambah sejumlah 100."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Good Punch"
		},

		damage: 70,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card