import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [512],

	name: {
		'en-us': "Simisage",
		'fr-fr': "Feuiloutan",
		'es-es': "Simisage",
		'it-it': "Simisage",
		'pt-br': "Simisage",
		'de-de': "Vegichita"
	},

	illustrator: "Hasegawa Saki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Pansage",
		'fr-fr': "Feuillajou",
		'es-es': "Pansage",
		'it-it': "Pansage",
		'pt-br': "Pansage",
		'de-de': "Vegimak"
	},

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Seed Bomb",
				'fr-fr': "Canon Graine",
				'es-es': "Bomba Germen",
				'it-it': "Semebomba",
				'pt-br': "Bomba de Sementes",
				'de-de': "Samenbomben"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giga Impact",
				'fr-fr': "Giga Impact",
				'es-es': "Gigaimpacto",
				'it-it': "Gigaimpatto",
				'pt-br': "Gigaimpacto",
				'de-de': "Gigastoß"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon can't attack.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
				'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
				'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Ill tempered, it fights by swinging its barbed tail around wildly. The leaf growing on its head is very bitter."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 482909,
				tcgplayer: 219075
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482909,
				tcgplayer: 219075
			}
		},
	],
}

export default card
