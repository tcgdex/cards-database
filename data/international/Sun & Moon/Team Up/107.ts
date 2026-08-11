import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'it-it': "Honedge",
		'pt-br': "Honedge",
		'de-de': "Gramokles"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		679,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Cut Down",
				'fr-fr': "Retranchement",
				'es-es': "Recorte",
				'it-it': "Falciare",
				'pt-br': "Corte",
				'de-de': "Umsägen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If anyone dares to grab its hilt, it wraps a blue cloth around that person's arm and drains that person's life energy completely.",
	},

	thirdParty: {
		cardmarket: 369036,
		tcgplayer: 183891
	}
}

export default card
