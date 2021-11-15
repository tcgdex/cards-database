import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokémon Trader",
		fr: "Marchand de Pokémon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Échangez 1 carte Pokémon de base ou Évolution de votre main contre 1 carte Pokémon de base ou Évolution de votre deck. Montrez les deux cartes à votre adversaire. Ensuite, mélangez votre deck."
	}
}

export default card
