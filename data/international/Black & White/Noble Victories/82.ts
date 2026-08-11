import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		625,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Stream",
				'fr-fr': "Courant d'Énergie",
			},
			effect: {
				'en-us': "Attach a Metal Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie Metal de votre pile de défausse à ce Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metal Scissors",
				'fr-fr': "Ciseaux d'Acier",
			},
			effect: {
				'en-us': "Does 20 more damage for each Metal Energy attached to this Pokémon.",
				'fr-fr': "Inflige 20 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon.",
			},
			damage: 40,

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

	retreat: 2,

	description: {
		'en-us': "It leads a group of Pawniard. It battles to become the boss, but will be driven from the group if it loses.",
	},

	thirdParty: {
		cardmarket: 280199,
		tcgplayer: 83843
	}
}

export default card
