import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Slaking",
		'fr-fr': "Monaflèmit",
		'es-es': "Slaking",
		'it-it': "Slaking",
		'pt-br': "Slaking",
		'de-de': "Letarking"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		289,
	],

	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Unobservant",
				'fr-fr': "Distrait",
				'es-es': "Descuido",
				'it-it': "Sbadataggine",
				'pt-br': "Desatenção",
				'de-de': "Unachtsam"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Basic Pokémon, this Pokémon can’t attack.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon de base, ce Pokémon ne peut pas attaquer.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Básico, este Pokémon no puede atacar.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Base, questo Pokémon non può attaccare.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, este Pokémon não poderá atacar.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, kann dieses Pokémon nicht angreifen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crushing Blow",
				'fr-fr': "Coup Écrasant",
			},
			effect: {
				'en-us': "Discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "The world's laziest Pokémon. When it is lounging, it is actually saving energy for striking back.",
	},

	thirdParty: {
		cardmarket: 280542,
		tcgplayer: 89293
	}
}

export default card
