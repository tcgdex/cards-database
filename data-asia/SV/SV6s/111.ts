import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Okidogi"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		id: "Pokémon yang kasar dan mudah marah. Ia memukul habis segalanya dengan mengayunkan rantai di lehernya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Adrenaline Power"
		},

		effect: {
			id: "Jika Pokémon ini mengenakan Energi {Kegelapan}, HP maksimal Pokémon ini bertambah sejumlah 100 dan kerusakan akibat serangan yang digunakan oleh Pokémon ini kepada Pokémon Bertarung lawan bertambah sejumlah 100."
		}
	}],

	attacks: [{
		name: {
			id: "Good Punch"
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