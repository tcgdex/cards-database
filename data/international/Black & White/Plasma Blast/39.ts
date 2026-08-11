import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Munna",
		'fr-fr': "Munna",
		'es-es': "Munna",
		'it-it': "Munna",
		'pt-br': "Munna",
		'de-de': "Somniam"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		517,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mumble",
				'fr-fr': "Murmure",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Focused Wish",
				'fr-fr': "Vœu Fervent",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
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

	description: {
		'en-us': "This Pokémon appears before people and Pokémon who are having nightmares and eats those dreams.",
	},

	thirdParty: {
		cardmarket: 281060,
		tcgplayer: 87645
	}
}

export default card
