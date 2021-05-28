import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Pyrobut V",
		en: "Cinderace V"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Coureur de Fond",
			en: "Field Runner"
		},

		effect: {
			fr: "Si un Stade est en jeu, ce Pokémon n’a pas de Coût de Retraite.",
			en: "If a Stadium is in play, this Pokémon has no Retreat Cost."
		}
	}],

	attacks: [{
		name: {
			fr: "Jambes Carmin",
			en: "Crimson Legs"
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