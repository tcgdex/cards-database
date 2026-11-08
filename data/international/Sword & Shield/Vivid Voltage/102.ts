import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [889],

	name: {
		'en-us': "Zamazenta",
		'fr-fr': "Zamazenta",
		'es-es': "Zamazenta",
		'it-it': "Zamazenta",
		'pt-br': "Zamazenta",
		'de-de': "Zamazenta"
	},

	illustrator: "aky CG Works",
	rarity: "Amazing Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Metal Armament",
				'fr-fr': "Artillerie Métallique",
				'es-es': "Armamento Metálico",
				'it-it': "Dotazione Metallica",
				'pt-br': "Armamento de Metal",
				'de-de': "Metallrüstung"
			},
			effect: {
				'en-us': "Attach a basic Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
				'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon una carta Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia básica da sua pilha de descarte a este Pokémon.",
				'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Fighting",
				"Metal",
			],
			name: {
				'en-us': "Amazing Shield",
				'fr-fr': "Bouclier Magnifique",
				'es-es': "Escudo Increíble",
				'it-it': "Scudo Policromo",
				'pt-br': "Escudo Incrível",
				'de-de': "Atemberaubender Schild"
			},
			effect: {
				'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon VMAX.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-VMAX.",
				'es-es': "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon VMAX.",
				'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-VMAX.",
				'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon VMAX.",
				'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Pokémon-VMAX zugefügt wird."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its ability to deflect any attack led to it being known as the Fighting Master's Shield. It was feared and respected by all."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 511930,
				tcgplayer: 226554
			}
		},
	],
}

export default card
