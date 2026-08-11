import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'it-it': "Honedge",
		'pt-br': "Honedge",
		'de-de': "Gramokles"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		679,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Stab",
				'fr-fr': "Blessure",
				'es-es': "Puñalada",
				'it-it': "Pugnalata",
				'pt-br': "Facada",
				'de-de': "Stich"
			},
			effect: {
				'en-us': "Put 1 damage counter on your opponent's Active Pokémon.",
				'fr-fr': "Placez 1 marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
				'es-es': "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
				'it-it': "Metti un segnalino danno sul Pokémon attivo del tuo avversario.",
				'pt-br': "Coloque 1 contador de danos no Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If anyone dares to grab its hilt, it wraps a blue cloth around that person's arm and drains that person's life energy completely.",
	},

	thirdParty: {
		cardmarket: 288235,
		tcgplayer: 111601
	}
}

export default card
