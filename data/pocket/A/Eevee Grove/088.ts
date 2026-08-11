import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Primarina ex",
		'fr-fr': "Oratoria-ex"
	},

	illustrator: "DOM",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [730],
	hp: 180,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Brionne"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Hydro Pump",
			'fr-fr': "Hydrocanon"
		},

		damage: 40,
		cost: ["Water"],

		effect: {
			'en-us': "If this Pokémon has at least 1 extra {W} Energy attached, this attack does 40 more damage.",
			'fr-fr': "Si ce Pokémon a au moins une Énergie {W} de plus, cette attaque inflige 40 dégâts supplémentaires."
		}
	}, {
		name: {
			'en-us': "Sparkling Aria",
			'fr-fr': "Aria de l'Écume"
		},

		damage: 100,
		cost: ["Water", "Water", "Water"],

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts à ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card