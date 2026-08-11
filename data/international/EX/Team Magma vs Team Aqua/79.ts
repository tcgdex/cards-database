import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua Technical Machine 01",
		'fr-fr': "Machine Technique 01 de Team Aqua",
		'de-de': "Team Aqua Technical Machine 01"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Attach this card to 1 of your Pokémon that has Team Aqua in its name. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Team Aqua Technical Machine 01.",
		'fr-fr': "Attachez cette carte à 1 de vos Pokémon dont le nom comporte Team Aqua. Ce Pokémon peut utiliser l'attaque de cette carte à la place de ses attaques. À la fin du tour, défaussez Machine Technique 01 de Team Aqua.",
		'de-de': "Attach this card to 1 of your Pokémon that has Team Aqua in its name. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Team Aqua Technical Machine 01."
	},

	attacks: [
		{
			name: {
				'en-us': "Miracle",
				'de-de': "Miracle",
				'fr-fr': "Miracle"
			},
			damage: 10,
			effect: {
				'en-us': "Choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
				'de-de': "Choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
				'fr-fr': "Choisissez un État Spécial. Le Pokémon Défenseur est maintenant affecté par cet État Spécial."
			},
			cost: [
				"Colorless",
			]
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275856,
				tcgplayer: 89773
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275856,
				tcgplayer: 89773
			}
		},
	],

	retreat: 0
}

export default card
