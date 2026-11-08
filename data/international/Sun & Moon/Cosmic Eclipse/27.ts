import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Magcargo",
		'fr-fr': "Volcaropod",
		'es-es': "Magcargo",
		'it-it': "Magcargo",
		'pt-br': "Magcargo",
		'de-de': "Magcargo"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Stomp Off",
				'fr-fr': "Tohu-Bohu",
				'es-es': "Pisotear",
				'it-it': "Pestatura",
				'pt-br': "Sair Irritado",
				'de-de': "Davonstapfen"
			},
			effect: {
				'en-us': "Discard the top 2 cards of your opponent’s deck.",
				'fr-fr': "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
				'es-es': "Descarta las 2 primeras cartas de la baraja de tu rival.",
				'it-it': "Scarta le prime due carte del mazzo del tuo avversario.",
				'pt-br': "Descarte as 2 primeiras cartas do baralho do seu oponente.",
				'de-de': "Lege die obersten 2 Karten des Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-Flammes",
				'es-es': "Lanzallamas",
				'it-it': "Lanciafiamme",
				'pt-br': "Lança-chamas",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its brittle shell occasionally spouts intense flames that circulate throughout its body.",
	},

	thirdParty: {
		cardmarket: 407784,
		tcgplayer: 201199
	}
}

export default card
