import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Primarina ex",
		fr: "Oratoria-ex"
	},

	illustrator: "DOM",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [730],
	hp: 180,
	types: ["Water"],

	evolveFrom: {
		en: "Brionne"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon"
		},

		damage: 40,
		cost: ["Water"],

		effect: {
			en: "If this Pokémon has at least 1 extra {W} Energy attached, this attack does 40 more damage.",
			fr: "Si ce Pokémon a au moins une Énergie {W} de plus, cette attaque inflige 40 dégâts supplémentaires."
		}
	}, {
		name: {
			en: "Sparkling Aria",
			fr: "Aria de l'Écume"
		},

		damage: 100,
		cost: ["Water", "Water", "Water"],

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card