import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Low Pressure System",
		'fr-fr': "Système à basse pression",
		'de-de': "Tiefdrucksystem"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each Grass and Lightning Pokémon in play (both yours and your opponent's) gets +10 HP.",
		'fr-fr': "Cette carte reste en jeu lorsque vous la jouez. Défaussez -la si une autre carte Stade est mise en jeu.",
		'de-de': "Each  and  Pokémon in play (both yours and your opponent's) gets +10HP.",
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86846,
				cardmarket: 275963
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86846,
				cardmarket: 275963
			},
		},
	],

}

export default card
