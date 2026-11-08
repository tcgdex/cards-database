import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [745],

	name: {
		'en-us': "Lycanroc",
		'fr-fr': "Lougaroc",
		'es-es': "Lycanroc",
		'it-it': "Lycanroc",
		'pt-br': "Lycanroc",
		'de-de': "Wolwerock"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rock Throw",
				'fr-fr': "Jet-Pierres",
				'es-es': "Lanzarrocas",
				'it-it': "Sassata",
				'pt-br': "Lançamento de Rocha",
				'de-de': "Steinwurf"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Slashing Strike",
				'fr-fr': "Coup Déchirant",
				'es-es': "Golpe Cuchillazo",
				'it-it': "Lacerattacco",
				'pt-br': "Ataque Cortante",
				'de-de': "Schlitzender Schlag"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon can't use Slashing Strike.",
				'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup Déchirant.",
				'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpe Cuchillazo.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
				'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Ataque Cortante.",
				'de-de': "Während deines nächsten Zuges kann dieses Pokémon Schlitzender Schlag nicht einsetzen."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		'en-us': "The rocks in its mane are sharper than a knife. Fragments that break off are treasured as good luck charms."
	},

	thirdParty: {
		cardmarket: 500005,
		tcgplayer: 223022
	}
}

export default card
