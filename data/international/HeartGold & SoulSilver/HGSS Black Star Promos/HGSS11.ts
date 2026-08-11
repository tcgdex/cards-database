import { Card } from 'models/database/card'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Latios",
		'fr-fr': "Latios"
	},
	illustrator: "Wataru Kawahara",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [381],
	hp: 90,
	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Luster Float",
				'fr-fr': "Éclat ondoyant"
			},
			effect: {
				'en-us': "If you have Latias in play, the Retreat Cost for Latios is 0.",
				'fr-fr': "Si vous avez Latias en jeu, le Coût de retraite de Latios est de 0."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Infinite Wing",
				'fr-fr': "Aile éternelle"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to Latios.",
				'fr-fr': "Défaussez 2 Énergies attachées à Latios."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It understands human speech and is highly intelligent. It is a tender Pokémon that dislikes fighting."
	},

	variants: [
		{
			type: "holo",
			foil: 'cracked-ice',
			thirdParty: {
				cardmarket: 275615,
				tcgplayer: 97706
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 86667
			}
		}
	],

}

export default card
