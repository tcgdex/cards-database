import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Battle Frontier",
		'fr-fr': "Zone de combat",
		'de-de': "Kampfzone"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each player's Colorless Evolved Pokémon, Darkness Evolved Pokémon, and Metal Evolved Pokémon can't use any Poké-Powers or Poké-Bodies.",
		'fr-fr': "Cette carte reste en jeu lorsque vous la jouez. Défaussez -la si une autre carte Stade est mise en jeu.",
		'de-de': "Each player's  Evolved Pokémon,  Evolved Pokémon, and  Evolved Pokémon can't use any Poké-Powers or Poké-Bodies.",
	},

	thirdParty: {
		tcgplayer: 83740,
		cardmarket: 276586
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83740,
				cardmarket: 276586
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 83740,
				cardmarket: 276586
			},
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"],
			thirdParty: {
				tcgplayer: 477599,
				cardmarket: 869581
			},
		}
	],
}

export default card
