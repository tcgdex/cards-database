import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Cinderace V",
		fr: "Pyrobut V"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Field Runner",
			fr: "Coureur de Fond"
		},

		effect: {
			en: "If a Stadium is in play, this Pokémon has no Retreat Cost.",
			fr: "Si un Stade est en jeu, ce Pokémon n’a pas de Coût de Retraite."
		}
	}],

	attacks: [{
		name: {
			en: "Crimson Legs",
			fr: "Jambes Carmin"
		},

		damage: 140,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card