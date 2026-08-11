import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge",
		'de-de': "Rasaff"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [57],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],

			name: {
				'en-us': "Karate Chop",
				'fr-fr': "Poing-Karaté",
				'de-de': "Karate Chop"
			},

			effect: {
				'en-us': "Damage from this attack is reduced by 10 for each damage counter on Primeape.",
				'fr-fr': "Les dégâts de cette attaque sont réduits de 10 pour chaque marqueur de dégâts sur Colossinge.",
				'de-de': "Damage from this attack is reduced by 10 for each damage counter on Primeape."
			},

			damage: "40-"
		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sudden Charge",
				'fr-fr': "Charge soudaine",
				'de-de': "Sudden Charge"
			},
			effect: {
				'en-us': "Primeape does 10 damage to itself. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				'fr-fr': "Colossinge s'inflige 30 dégâts. Ensuite, votre adversaire échange le Pokémon Défenseur contre un des Pokémon de son Banc, s'il en a.",
				'de-de': "Primeape does 10 damage to itself. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any."
			},
			damage: 40,

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
			type: 'normal',
			thirdParty: {
				tcgplayer: 88359,
				cardmarket: 275101
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88359,
				cardmarket: 275101
			}
		},
	]
}

export default card
