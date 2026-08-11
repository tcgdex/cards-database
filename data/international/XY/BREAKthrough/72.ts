import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Swoobat",
		'fr-fr': "Rhinolove",
		'es-es': "Swoobat",
		'it-it': "Swoobat",
		'pt-br': "Swoobat",
		'de-de': "Fletiamo"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		528,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Woobat",
		'fr-fr': "Chovsourir",
		'es-es': "Woobat",
		'it-it': "Woobat",
		'pt-br': "Woobat",
		'de-de': "Fleknoil"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Wave Amplification",
				'fr-fr': "Amplification d'Onde",
				'es-es': "Amplificación de Ondas",
				'it-it': "Amplificazione Onde",
				'pt-br': "Ampliação de Onda",
				'de-de': "Wellenamplifikation"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Returning Echo attack does 60 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l'attaque Écho de Retour de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, el ataque Eco Retorno de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, l'attacco Eco di Ritorno di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a sua próxima vez de jogar, o ataque Retorno do Eco deste Pokémon causará 60 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügt die Attacke Widerhallendes Echo dieses Pokémon 60 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Returning Echo",
				'fr-fr': "Écho de Retour",
				'es-es': "Eco Retorno",
				'it-it': "Eco di Ritorno",
				'pt-br': "Retorno do Eco",
				'de-de': "Widerhallendes Echo"
			},
			effect: {
				'en-us': "Flip a coin. If tails, return this Pokémon and all cards attached to it to your hand.",
				'fr-fr': "Lancez une pièce. Si c'est pile, reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
				'es-es': "Lanza 1 moneda. Si sale cruz, devuelve este Pokémon y todas las cartas unidas a él a tu mano.",
				'it-it': "Lancia una moneta. Se esce croce, riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
				'pt-br': "Jogue uma moeda. Se sair coroa, devolva este Pokémon e todos os cards ligados a ele para a sua mão.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" nimm dieses Pokémon und alle daran angelegten Karten zurück auf deine Hand."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Anyone who comes into contact with the ultrasonic waves emitted by a courting male experiences a positive mood shift.",
	},

	thirdParty: {
		cardmarket: 286318,
		tcgplayer: 107191
	}
}

export default card
