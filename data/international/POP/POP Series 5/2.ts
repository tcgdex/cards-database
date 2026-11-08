import { Card } from 'models/database/card'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		'en-us': "Lugia",
		'fr-fr': "Lugia"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [249],

	hp: 80,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Super Psy Bolt",
				'fr-fr': "Super psy"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Aerowing",
				'fr-fr': "Aéroaile"
			},

			effect: {
				'en-us': "Before doing damage, you may flip a coin. If tails, this attack does nothing. If heads, this attack does 60 damage instead.",
				'fr-fr': "Avant d'infliger des dégâts, vous pouvez lancer une pièce. Si c'est face, cette attaque inflige 60 dégâts. Si c'est pile, cette attaque ne fait rien."
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
	retreat: 2,
	
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86907,
				cardmarket: 277484
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86907,
				cardmarket: 277484
			},
		},
	],

}

export default card
