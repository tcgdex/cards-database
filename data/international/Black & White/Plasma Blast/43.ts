import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Duosion",
		'fr-fr': "Méios",
		'es-es': "Duosion",
		'it-it': "Duosion",
		'pt-br': "Duosion",
		'de-de': "Mitodos"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		578,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Solosis",
		'fr-fr': "Nucléos",
	},

	stage: "Stage1",

	attacks: [
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
			damage: 20,

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
		'en-us': "When their two divided brains think the same thoughts, their psychic power is maximized.",
	},

	thirdParty: {
		cardmarket: 281064,
		tcgplayer: 85018
	}
}

export default card
