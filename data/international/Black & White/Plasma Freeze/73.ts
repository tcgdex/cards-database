import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

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
		"Darkness",
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
				'en-us': "Slash",
				'fr-fr': "Tranche",
			},

			damage: 40,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Slayer",
				'fr-fr': "Dragon Slayer",
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Dragon Pokémon, this attack does 40 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Dragon, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This pitiless Pokémon commands a group of Pawniard to hound prey into immobility. It then moves in to finish the prey off.",
	},

	thirdParty: {
		cardmarket: 280951,
		tcgplayer: 83848
	}
}

export default card
