import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Diancie",
		'fr-fr': "Diancie",
		'es-es': "Diancie",
		'it-it': "Diancie",
		'pt-br': "Diancie",
		'de-de': "Diancie"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		719,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Sparkling Wish",
				'fr-fr': "Espoir Étincelant",
				'es-es': "Deseo Destellante",
				'it-it': "Desiderio Scintillante",
				'pt-br': "Desejo Brilhante",
				'de-de': "Funkelnder Wunsch"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck une carte Évolution de l’un de vos Pokémon et placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta que evolucione de 1 de tus Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta che si evolve da uno dei tuoi Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta no seu baralho que evolua de 1 dos seus Pokémon e coloque-a sobre aquele Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Karte, die sich aus 1 deiner Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Diamond Storm",
				'fr-fr': "Orage Adamantin",
				'es-es': "Tormenta de Diamantes",
				'it-it': "Diamantempesta",
				'pt-br': "Tempestade Diamante",
				'de-de': "Diamantsturm"
			},
			effect: {
				'en-us': "Heal 30 damage from each of your Fairy Pokémon.",
				'fr-fr': "Soignez 30 dégâts à chacun de vos Pokémon Fairy.",
				'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon Fairy.",
				'it-it': "Cura ciascuno dei tuoi Pokémon Fairy da 30 danni.",
				'pt-br': "Cure 30 pontos de dano de cada um dos seus Pokémon Fairy.",
				'de-de': "Heile 30 Schadenspunkte bei jedem deiner Fairy-Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A sudden transformation of Carbink, its pink, glimmering body is said to be the loveliest sight in the whole world.",
	},

	thirdParty: {
		cardmarket: 299495,
		tcgplayer: 138588
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
