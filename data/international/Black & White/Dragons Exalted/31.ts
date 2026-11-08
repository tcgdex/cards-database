import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Walrein",
		'fr-fr': "Kaimorse",
		'es-es': "Walrein",
		'it-it': "Walrein",
		'pt-br': "Walrein",
		'de-de': "Walraisa"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		365,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Sealeo",
		'fr-fr': "Phogleur",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aurora Beam",
				'fr-fr': "Onde Boréale",
			},

			damage: 80,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ice Entomb",
				'fr-fr': "Cercueil de Glace",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Paralyzed. This Pokémon can't use Ice Entomb during your next turn.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Paralysé. Ce Pokémon ne peut pas utiliser Cercueil de Glace pendant votre prochain tour.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It shatters ice with its big tusks. Its thick blubber repels not only the cold, but also enemy attacks.",
	},

	thirdParty: {
		cardmarket: 280470,
		tcgplayer: 90469
	}
}

export default card
