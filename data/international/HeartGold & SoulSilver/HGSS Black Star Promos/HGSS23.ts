import { Card } from 'models/database/card'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2"
	},
	illustrator: "TOKIYA",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [233],
	hp: 80,
	types: [
		"Colorless"
	],
	evolveFrom: {
		'en-us': "Porygon",
		'fr-fr': "Porygon"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Shortcut",
				'fr-fr': "Raccourci"
			},
			effect: {
				'en-us': "The Retreat Cost for each Porygon, Porygon2, and Porygon-Z you have in play is Colorless less.",
				'fr-fr': "Le Coût de retraite de chacun de vos Porygon, Porygon2 et Porygon-Z en jeu est diminué de ."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reckless Charge",
				'fr-fr': "Attaque imprudente"
			},
			effect: {
				'en-us': "Porygon2 does 10 damage to itself.",
				'fr-fr': "Porygon2 s'inflige 10 dégâts."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "This upgraded version of Porygon is designed for space exploration. It can't fly, though."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275603,
				tcgplayer: 88328
			}
		},
	],

}

export default card
