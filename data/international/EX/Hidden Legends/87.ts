import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Ancient Tomb",
		'fr-fr': "Tombeau antique",
		'de-de': "Ancient Tomb*"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Don't apply Weakness for all Pokémon in play (excluding Pokémon-ex and Pokémon that has an owner in its name).",
		'fr-fr': "Cette carte reste en jeu lorsque vous la jouez. Défaussez -la si une autre carte Stade est mise en jeu.",
		'de-de': "Don't apply Weakness for all Pokémon in play (excluding Pokémon-ex and Pokémon that has an owner in its name)."
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83556,
				cardmarket: 276161
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83556,
				cardmarket: 276161
			}
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"],
			thirdParty: {
				cardmarket: 871857,
				tcgplayer: 477365
			}
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"],
			thirdParty: {
				cardmarket: 871578,
				tcgplayer: 477497
			}
		},
	]
}

export default card
