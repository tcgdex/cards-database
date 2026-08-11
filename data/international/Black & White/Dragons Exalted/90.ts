import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Garchomp",
		'fr-fr': "Carchacrok",
		'es-es': "Garchomp",
		'it-it': "Garchomp",
		'pt-br': "Garchomp",
		'de-de': "Knakrack"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Gabite",
		'fr-fr': "Carmache",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Mach Cut",
				'fr-fr': "Coupe Vive",
			},
			effect: {
				'en-us': "Discard a Special Energy attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une Énergie spéciale attachée au Pokémon Défenseur.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Fighting",
			],
			name: {
				'en-us': "Dragonblade",
				'fr-fr': "Draco-Lame",
			},
			effect: {
				'en-us': "Discard the top 2 cards of your deck.",
				'fr-fr': "Défaussez les 2 cartes du dessus de votre deck.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is said that when one runs at high speed, its wings create blades of wind that can fell nearby trees.",
	},

	thirdParty: {
		cardmarket: 280529,
		tcgplayer: 85624
	}
}

export default card
