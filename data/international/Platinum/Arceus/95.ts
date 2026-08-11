import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Arceus LV.X",
		'fr-fr': "Arceus",
		'de-de': "Arceus"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [493],
	
	hp: 120,

	types: [
		"Colorless"
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Multitype",
				'fr-fr': "Multi-Type",
				'de-de': "Variabilität"
			},
			effect: {
				'en-us': "Arceus LV.X's type is the same as its previous Level.",
				'fr-fr': "Le type d'Arceus NIV.X est le même qu'au tour précédent.",
				'de-de': "Arceus LV.X hat denselben Typ wie sein vorheriges Level."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Meteor Blast",
				'fr-fr': "Explosion de météores",
				'de-de': "Meteorexplosion"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack's base damage is 50 instead of 100.",
				'fr-fr': "Lancez une pièce. Si c'est pile, les dégâts de base de cette attaque sont de 50 au lieu de 100.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" beträgt der Grundschaden dieses Angriffs 50 Schadenspunkte anstelle von 100 Schadenspunkten."
			},
			damage: 100,

		},
	],


	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83603
			}
		},
	]
}

export default card
