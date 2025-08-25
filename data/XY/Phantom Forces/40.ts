import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Musharna",
		fr: "Mushana",
		es: "Musharna",
		it: "Musharna",
		pt: "Musharna",
		de: "Somnivora"
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
		en: "Munna",
		fr: "Munna",
		es: "Munna",
		it: "Munna",
		pt: "Munna",
		de: "Somniam"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Dream of Memories",
				fr: "Retour en Arrière",
				es: "Sueño de Memorias",
				it: "Reminiscenze Oniriche",
				pt: "Sonho de Lembranças",
				de: "Traum der Erinnerungen"
			},
			effect: {
				en: "Shuffle 3 cards from your discard pile into your deck.",
				fr: "Mélangez 3 cartes de votre pile de défausse avec votre deck.",
				es: "Pon 3 cartas de tu pila de descartes en tu baraja y baraja todas las cartas.",
				it: "Rimischia tre carte dalla tua pila degli scarti nel tuo mazzo.",
				pt: "Embaralhe 3 cards da sua pilha de descarte no seu baralho.",
				de: "Mische 3 Karten aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Dream Dance",
				fr: "Danse-Rêve",
				es: "Danza Onírica",
				it: "Sognodanza",
				pt: "Dança dos Sonhos",
				de: "Traumtanz"
			},
			effect: {
				en: "Both Active Pokémon are now Asleep.",
				fr: "Les deux Pokémon Actifs sont maintenant Endormis.",
				es: "Ambos Pokémon Activos pasan a estar Dormidos.",
				it: "Entrambi i Pokémon attivi vengono addormentati.",
				pt: "Ambos os Pokémon Ativos agora estão Adormecidos.",
				de: "Beide Aktiven Pokémon schlafen jetzt."
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

	thirdParty: {
		cardmarket: 281846,
		tcgplayer: 94238
	}
}

export default card
