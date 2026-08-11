import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma Technical Machine 01",
		'fr-fr': "Machine Technique 01 de Team Magma",
		'de-de': "Team Magma Technische Maschine"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Attach this card to 1 of your Pokémon that has Team Magma in its name. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Team Magma Technical Machine 01.",
		'fr-fr': "Attachez cette carte à 1 de vos Pokémon dont le nom comporte Team Magma. Ce Pokémon peut utiliser l'attaque de cette carte à la place de ses attaques. À la fin du tour, défaussez Machine Technique 01 de Team Magma.",
		'de-de': "Attach this card to 1 of your Pokémon that has Team Magma in its name. That Pokémon may use this card´s attack instead of its own. At the end of your turn, discard Team Magma Technical Machine 01."
	},

	attacks: [
		{
			name: {
				'en-us': "Crushing Magma",
				'de-de': "Crushing Magma",
				'fr-fr': "Magma écrasant"
			},
			damage: 10,
			effect: {
				'en-us': "Choose an Energy card attached to the Defending Pokémon and put that card at the bottom of your opponent's deck.",
				'de-de': "Choose Energy card attached to the Defending Pokémon and put that card at the bottom of your opponent´s deck.",
				'fr-fr': "Choisissez une carte Énergie attachée au Pokémon Défenseur et placez-la à la fin du deck de votre adversaire."
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
				cardmarket: 275861,
				tcgplayer: 89817
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275861,
				tcgplayer: 89817
			}
		},
	],

	retreat: 0
}

export default card
