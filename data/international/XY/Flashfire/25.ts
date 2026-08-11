import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Sealeo",
		'fr-fr': "Phogleur",
		'es-es': "Sealeo",
		'it-it': "Sealeo",
		'pt-br': "Sealeo",
		'de-de': "Seejong"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		364,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Spheal",
		'fr-fr': "Obalie",
		'es-es': "Spheal",
		'it-it': "Spheal",
		'pt-br': "Spheal",
		'de-de': "Seemops"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rest",
				'fr-fr': "Repos",
				'es-es': "Descanso",
				'it-it': "Riposo",
				'pt-br': "Descansar",
				'de-de': "Erholung"
			},
			effect: {
				'en-us': "Heal 60 damage from this Pokémon. This Pokémon is now Asleep.",
				'fr-fr': "Soignez 60 dégâts à ce Pokémon. Ce Pokémon est maintenant Endormi.",
				'es-es': "Cura 60 puntos de daño a este Pokémon. Este Pokémon pasa a estar Dormido.",
				'it-it': "Cura questo Pokémon da 60 danni. Questo Pokémon viene addormentato.",
				'pt-br': "Cure 60 de danos deste Pokémon. Este Pokémon agora está Adormecido.",
				'de-de': "Heile 60 Schadenspunkte bei diesem Pokémon. Dieses Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Ball",
				'fr-fr': "Ball'Glace",
				'es-es': "Bola Hielo",
				'it-it': "Palla Gelo",
				'pt-br': "Bola de Gelo",
				'de-de': "Frostbeule"
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

	retreat: 3,

	description: {
		'en-us': "It has a very sensitive nose. It touches new things with its nose to examine them.",
	},

	thirdParty: {
		cardmarket: 281508,
		tcgplayer: 91158
	}
}

export default card
