import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Wattapik"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Épines Choquantes"
		},

		effect: {
			fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts pour chaque côté face. Si vous obtenez au moins 2 côtés face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		},

		damage: "30×",
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card