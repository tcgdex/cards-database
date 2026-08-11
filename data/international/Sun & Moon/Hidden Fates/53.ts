import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Brock’s Grit",
		'fr-fr': "Vaillance de Pierre",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Choisissez une combinaison de 6 cartes Pokémon et cartes Énergie de base dans votre pile de défausse et mélangez-les avec votre deck.",
		'en-us': "Shuffle 6 in any combination of Pokémon and basic Energy cards from your discard pile into your deck."
	},
	trainerType: "Supporter",

}

export default card
