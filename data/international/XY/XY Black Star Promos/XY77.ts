import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Dialga",
		'fr-fr': "Dialga",
	},

	illustrator: "TOKIYA",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 120,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Metal Claw",
				'fr-fr': "Griffe Acier",
			},

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Time Freeze",
				'fr-fr': "Gel Temporel"
			},
			effect: {
				'en-us': "Your opponent can't play any Pokémon from his or her hand to evolve the Defending Pokémon during his or her next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer le Pokémon Défenseur pendant son prochain tour."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
	},

	thirdParty: {
		cardmarket: 289800
	}
}

export default card
