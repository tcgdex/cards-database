import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Horsea",
		fr: "Hypotrempe"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Smokescreen",
			fr: "Brouillard"
		},

		effect: {
			en: "During your opponent’s next turn, if the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack doesn’t happen.",
			fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d’attaquer, votre adversaire lance une pièce. Si c’est pile, l’attaque n’est pas lancée."
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card