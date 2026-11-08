import { Card } from 'models/database/card'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune"
	},
	illustrator: "Hideaki Hakozaki",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [245],
	hp: 80,
	types: [
		"Water"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Sheer Cold",
				'fr-fr': "Glaciation"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer lors du prochain tour de votre adversaire."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Said to be the embodiment of north winds, it can instantly purify filthy, murky water."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275600,
				tcgplayer: 89605
			}
		},
	],

}

export default card
