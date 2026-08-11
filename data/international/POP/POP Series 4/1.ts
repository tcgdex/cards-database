import { Card } from 'models/database/card'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		'en-us': "Chimecho δ",
		'fr-fr': "Eoko δ"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [358],

	hp: 60,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Wrap",
				'fr-fr': "Ligotage"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Sonicboom",
				'fr-fr': "Sonicboom"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,
	
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84298,
				cardmarket: 277466
			},
		},
	],

}

export default card
