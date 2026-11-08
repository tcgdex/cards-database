import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Phantump",
		'fr-fr': "Brocélôme",
		'es-es': "Phantump",
		'it-it': "Phantump",
		'pt-br': "Phantump",
		'de-de': "Paragoni"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		708,
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
				'en-us': "Astonish",
				'fr-fr': "Étonnement",
				'es-es': "Impresionar",
				'it-it': "Sgomento",
				'pt-br': "Abismar",
				'de-de': "Erstauner"
			},
			effect: {
				'en-us': "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck.",
				'fr-fr': "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
				'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
				'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
				'pt-br': "Escolha um card aleatório da mão do seu oponente. Seu oponente revela esse card e o embaralha de volta no baralho dele ou dela.",
				'de-de': "Wähle 1 zufällige Karte aus der verdeckten Hand deines Gegners. Dein Gegner zeigt diese Karte und mischt sie zurück in sein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hook",
				'fr-fr': "Crochet",
				'es-es': "Garfio",
				'it-it': "Uncino",
				'pt-br': "Gancho",
				'de-de': "Haken"
			},

			damage: 30,

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
		'en-us': "These Pokémon are created when spirits possess rotten tree stumps. They prefer to live in abandoned forests.",
	},

	thirdParty: {
		cardmarket: 281391,
		tcgplayer: 88006
	}
}

export default card
