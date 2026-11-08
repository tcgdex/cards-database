import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Slowbro",
		'fr-fr': "Flagadoss",
		'es-es': "Slowbro",
		'it-it': "Slowbro",
		'pt-br': "Slowbro",
		'de-de': "Lahmus"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Airhead",
				'fr-fr': "Corniaud",
				'es-es': "Cabeza Hueca",
				'it-it': "Zuccavuota",
				'pt-br': "Cabeça Oca",
				'de-de': "Tagträumerei"
			},
			effect: {
				'en-us': "If you have 2, 4, or 6 Prize cards left, this Pokémon can’t attack.",
				'fr-fr': "S’il vous reste 2, 4 ou 6 cartes Récompense, ce Pokémon ne peut pas attaquer.",
				'es-es': "Si te quedan 2, 4 o 6 cartas de Premio, este Pokémon no puede atacar.",
				'it-it': "Se ti rimangono due, quattro o sei carte Premio, questo Pokémon non può attaccare.",
				'pt-br': "Se você possuir 2, 4 ou 6 cards de Prêmio restantes, este Pokémon não poderá atacar.",
				'de-de': "Wenn du 2, 4 oder 6 Preiskarten übrig hast, kann dieses Pokémon nicht angreifen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Lazy Headbutt",
				'fr-fr': "Coup d'Boule Fainéant"
			},
			effect: {
				'en-us': "This Pokémon is now Asleep.",
				'fr-fr': "Ce Pokémon est maintenant Endormi."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Though usually dim witted, it seems to become inspired if the Shellder on its tail bites down.",
	},

	thirdParty: {
		cardmarket: 280352,
		tcgplayer: 89309
	}
}

export default card
