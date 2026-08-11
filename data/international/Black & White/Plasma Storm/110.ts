import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Patrat",
		'fr-fr': "Ratentif",
		'es-es': "Patrat",
		'it-it': "Patrat",
		'pt-br': "Patrat",
		'de-de': "Nagelotz"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		504,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Reckless Charge",
				'fr-fr': "Attaque Imprudente",
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 10 dégâts.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Extremely cautious, one of them will always be on the lookout, but it won't notice a foe coming from behind.",
	},

	thirdParty: {
		cardmarket: 280850,
		tcgplayer: 87965
	}
}

export default card
