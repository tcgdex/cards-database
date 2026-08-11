import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Abomasnow",
		'fr-fr': "Blizzaroi",
		'es-es': "Abomasnow",
		'it-it': "Abomasnow",
		'pt-br': "Abomasnow",
		'de-de': "Rexblisar"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		460,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Freeze",
				'fr-fr': "Gel Rapide",
				'es-es': "Congelación Rápida",
				'it-it': "Congelamento Rapido",
				'pt-br': "Congelamento Veloz",
				'de-de': "Schnellfrost"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon has any Water Energy attached to it, it is now Paralyzed.",
				'fr-fr': "Si de l’Énergie Water est attachée au Pokémon Actif de votre adversaire, ce Pokémon est maintenant Paralysé.",
				'es-es': "Si el Pokémon Activo de tu rival tiene alguna Energía Water unida a él, este pasa a estar Paralizado.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha delle Energie Water assegnate, viene paralizzato.",
				'pt-br': "Se o Pokémon Ativo do seu oponente tiver alguma Energia Water ligada a ele, ele será Paralisado.",
				'de-de': "Wenn an das Aktive Pokémon deines Gegners mindestens 1 Water-Energie angelegt ist, ist es jetzt paralysiert."
			},
			damage: 70,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wild Tackle",
				'fr-fr': "Tacle Brutal",
				'es-es': "Placaje Salvaje",
				'it-it': "Azionferoce",
				'pt-br': "Investida Feroz",
				'de-de': "Wilder Tackle"
			},
			effect: {
				'en-us': "This Pokémon does 20 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 20 dégâts.",
				'es-es': "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Este Pokémon causa 20 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 140,

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
		'en-us': "It blankets wide areas in snow by whipping up blizzards. It is also known as \"The Ice Monster.\"",
	},

	thirdParty: {
		cardmarket: 388037,
		tcgplayer: 194963
	}
}

export default card
