import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Cofagrigus",
		'fr-fr': "Tutankafer",
		'es-es': "Cofagrigus",
		'it-it': "Cofagrigus",
		'pt-br': "Cofagrigus",
		'de-de': "Echnatoll"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		563,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Yamask",
		'fr-fr': "Tutafeh"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Chuck",
				'fr-fr': "Bazardage"
			},
			effect: {
				'en-us': "Discard as many Pokémon Tool cards as you like from your hand. This attack does 40 damage times the number of cards you discarded.",
				'fr-fr': "Défaussez autant de cartes Outil Pokémon que vous voulez de votre main. Cette attaque inflige 40 dégâts multipliés par le nombre de cartes que vous avez défaussées."
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Lock Up",
				'fr-fr': "Cage"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has been said that they swallow those who get too close and turn them into mummies. They like to eat gold nuggets.",
	},

	thirdParty: {
		cardmarket: 280380,
		tcgplayer: 84386
	}
}

export default card
