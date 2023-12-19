import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Pokémon March",
		fr: "La marche des Pokémon",
		de: "Pokémon Marsch"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Votre adversaire peut chercher 1 carte Pokémon de base dans son deck et la placer sur son Banc. Ensuite, vous pouvez chercher 1 carte Pokémon de base dans votre deck et la placer sur votre Banc. Enfin, chaque joueur mélange son deck. (Un joueur ne peut rien faire de tout cela si son Banc est plein.)",
		de: "Your opponent may search his or her deck for 1 Basic Pokémon card and put it into his or her Bench. Then, you may search your deck for 1 Basic Pokémon card and put it onto your Bench. Then, each player shuffles his or her deck. (A player can't do any of this if his or her Bench is full.)"
	}
}

export default card
