import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Victini",
		'fr-fr': "Victini",
		'es-es': "Victini",
		'it-it': "Victini",
		'pt-br': "Victini",
		'de-de': "Victini"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		494,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Me First",
				'fr-fr': "Moi d'Abord",
				'es-es': "Yo Primero",
				'it-it': "Precedenza",
				'pt-br': "Primeiro Eu",
				'de-de': "Egotrip"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'es-es': "Roba 1 carta.",
				'it-it': "Pesca una carta.",
				'pt-br': "Compre um card.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Psy Bolt",
				'fr-fr': "Choc Mental",
				'es-es': "Rayo Psi",
				'it-it': "Psico",
				'pt-br': "Raio Psíquico",
				'de-de': "Konfusion"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it shares the infinite energy it creates, that being's entire body will be overflowing with power.",
	},

	thirdParty: {
		cardmarket: 282681,
		tcgplayer: 98049
	}
}

export default card
