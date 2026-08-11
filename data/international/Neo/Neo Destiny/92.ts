import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Broken Ground Gym",
		'fr-fr': "Stade des terres brisées",
		'de-de': "Broken Ground Gym*"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each player pays Colorless more to retreat a Baby Pokémon or Basic Pokémon.",
		'fr-fr': "Cette carte reste en jeu lorsque vous la jouez. Défaussez-vous de cette carte si une autre carte Stade arrive en jeu.\n\nChaque joueur paie  supplémentaire pour faire battre en retraite un Bébé Pokémon ou un Pokémon de base.",
		'de-de': "Each player pays  more to retreat a Baby Pokémon or Basic Pokémon."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274744,
				tcgplayer: 83990
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274744,
				tcgplayer: 83990
			}
		}
	]
}

export default card
