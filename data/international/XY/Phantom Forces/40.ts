import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Musharna",
		'fr-fr': "Mushana",
		'es-es': "Musharna",
		'it-it': "Musharna",
		'pt-br': "Musharna",
		'de-de': "Somnivora"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		518,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Munna",
		'fr-fr': "Munna",
		'es-es': "Munna",
		'it-it': "Munna",
		'pt-br': "Munna",
		'de-de': "Somniam"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Dream of Memories",
				'fr-fr': "Retour en Arrière",
				'es-es': "Sueño de Memorias",
				'it-it': "Reminiscenze Oniriche",
				'pt-br': "Sonho de Lembranças",
				'de-de': "Traum der Erinnerungen"
			},
			effect: {
				'en-us': "Shuffle 3 cards from your discard pile into your deck.",
				'fr-fr': "Mélangez 3 cartes de votre pile de défausse avec votre deck.",
				'es-es': "Pon 3 cartas de tu pila de descartes en tu baraja y baraja todas las cartas.",
				'it-it': "Rimischia tre carte dalla tua pila degli scarti nel tuo mazzo.",
				'pt-br': "Embaralhe 3 cards da sua pilha de descarte no seu baralho.",
				'de-de': "Mische 3 Karten aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Dream Dance",
				'fr-fr': "Danse-Rêve",
				'es-es': "Danza Onírica",
				'it-it': "Sognodanza",
				'pt-br': "Dança dos Sonhos",
				'de-de': "Traumtanz"
			},
			effect: {
				'en-us': "Both Active Pokémon are now Asleep.",
				'fr-fr': "Les deux Pokémon Actifs sont maintenant Endormis.",
				'es-es': "Ambos Pokémon Activos pasan a estar Dormidos.",
				'it-it': "Entrambi i Pokémon attivi vengono addormentati.",
				'pt-br': "Ambos os Pokémon Ativos agora estão Adormecidos.",
				'de-de': "Beide Aktiven Pokémon schlafen jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The mist emanating from their foreheads is packed with the dreams of people and Pokémon.",
	},

	thirdParty: {
		cardmarket: 281846,
		tcgplayer: 94238
	}
}

export default card
