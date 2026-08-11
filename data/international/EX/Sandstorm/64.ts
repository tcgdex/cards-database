import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Ekans",
		'fr-fr': "Abo",
		'de-de': "Rettan"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [23],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bind",
				'fr-fr': "Étreinte",
				'de-de': "Klammergriff"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275841,
				tcgplayer: 85100
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275841,
				tcgplayer: 85100
			}
		},
	],

}

export default card
