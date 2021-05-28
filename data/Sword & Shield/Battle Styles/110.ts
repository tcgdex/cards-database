import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Corviknight VMAX",
		fr: "Corvaillus VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Metal"],

	evolveFrom: {
		en: "Corviknight V",
		fr: "Corvaillus-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Lustrous Body",
			fr: "Corps Lustré"
		},

		effect: {
			en: "Prevent all effects of your opponent’s Pokémon’s Abilities done to this Pokémon.",
			fr: "Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "G-Max Hurricane",
			fr: "Vent Violent G-Max"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t use G-Max Hurricane.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Vent Violent G-Max."
		},

		damage: 240,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	regulationMark: "E"
}

export default card