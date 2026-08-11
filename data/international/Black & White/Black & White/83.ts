import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Stoutland",
		'fr-fr': "Mastouffe",
		'es-es': "Stoutland",
		'it-it': "Stoutland",
		'pt-br': "Stoutland",
		'de-de': "Bissbark"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		508,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Herdier",
		'fr-fr': "Ponchien",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Odor Sleuth",
				'fr-fr': "Flair",
			},
			effect: {
				'en-us': "Flip 3 coins. For each heads, put a card from your discard pile into your hand.",
				'fr-fr': "Lancez 3 pièces. Pour chaque côté face, prenez une carte dans votre pile de défausse et ajoutez-la à votre main.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giga Impact",
				'fr-fr': "Giga Impact",
			},
			effect: {
				'en-us': "This Pokémon can't attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "This extremely wise Pokémon excels at rescuing people stranded at sea or in the mountains.",
	},

	thirdParty: {
		cardmarket: 279821,
		tcgplayer: 89570
	}
}

export default card
