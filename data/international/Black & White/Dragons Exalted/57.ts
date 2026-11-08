import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Gothitelle",
		'fr-fr': "Sidérella",
		'es-es': "Gothitelle",
		'it-it': "Gothitelle",
		'pt-br': "Gothitelle",
		'de-de': "Morbitesse"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		576,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gothorita",
		'fr-fr': "Mesmérella",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Doom Decree",
				'fr-fr': "Verdict Fatal",
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are heads, the Defending Pokémon is Knocked Out.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Défenseur est mis K.O.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Black Magic",
				'fr-fr': "Magie Noire",
			},
			effect: {
				'en-us': "Does 20 more damage for each of your opponent's Benched Pokémon.",
				'fr-fr': "Inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Starry skies thousands of light-years away are visible in the space distorted by their intense psychic power.",
	},

	thirdParty: {
		cardmarket: 280496,
		tcgplayer: 85853
	}
}

export default card
