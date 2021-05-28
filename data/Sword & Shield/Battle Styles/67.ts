import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Primeape",
		fr: "Colossinge"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge"
	},

	attacks: [{
		name: {
			en: "Field Crush",
			fr: "Broyeur de Terrain"
		},

		effect: {
			en: "If your opponent has a Stadium in play, discard it.",
			fr: "Si votre adversaire a un Stade en jeu, défaussez-le."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Steamin’ Mad Strike",
			fr: "Poing Furibond"
		},

		effect: {
			en: "This attack does 50 damage for each of your Benched Pokémon that has any damage counters on it.",
			fr: "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon de Banc ayant au moins un marqueur de dégâts."
		},

		damage: "50×",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card