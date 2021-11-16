import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Pokémon March",
		fr: "La marche des Pokémon"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Votre adversaire peut chercher 1 carte Pokémon de base dans son deck et la placer sur son Banc. Ensuite, vous pouvez chercher 1 carte Pokémon de base dans votre deck et la placer sur votre Banc. Enfin, chaque joueur mélange son deck. (Un joueur ne peut rien faire de tout cela si son Banc est plein.)"
	}
}

export default card
