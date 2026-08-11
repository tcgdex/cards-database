import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Meowstic",
		'fr-fr': "Mistigrix",
		'es-es': "Meowstic",
		'it-it': "Meowstic",
		'pt-br': "Meowstic",
		'de-de': "Psiaugon"
	},

	illustrator: "0313",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		678,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Teleportation Burst",
				'fr-fr': "Téléportation Explosive",
				'es-es': "Explosión Teleportadora",
				'it-it': "Scoppio Teletrasporto",
				'pt-br': "Teletransporte Explosivo",
				'de-de': "Blitz-Teleportation"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psychic",
				'fr-fr': "Psyko",
				'es-es': "Psíquico",
				'it-it': "Psichico",
				'pt-br': "Psíquico",
				'de-de': "Psychokinese"
			},
			effect: {
				'en-us': "This attack does 30 more damage times the amount of Energy attached to your opponent’s Active Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "30+",

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
		'en-us': "The eyeball patterns on the interior of its ears emit psychic energy. It keeps the patterns tightly covered because that power is too immense.",
	},

	thirdParty: {
		cardmarket: 355564,
		tcgplayer: 165696
	}
}

export default card
