import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "High Pressure System",
		'fr-fr': "Système à haute pression",
		'de-de': "Hochdrucksystem"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each player pays Colorless less to retreat his or her Fire and Water Pokémon.",
		'fr-fr': "Cette carte reste en jeu lorsque vous la jouez. Défaussez -la si une autre carte Stade est mise en jeu.",
		'de-de': "Each players pays  less to retreat his or her  and  Pokémon.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86076,
				cardmarket: 275962
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86076,
				cardmarket: 275962
			},
		},
	],

}

export default card
