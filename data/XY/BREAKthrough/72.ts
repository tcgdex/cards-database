import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Swoobat",
		fr: "Rhinolove",
		es: "Swoobat",
		it: "Swoobat",
		pt: "Swoobat",
		de: "Fletiamo"
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
		en: "Woobat",
		fr: "Chovsourir",
		es: "Woobat",
		it: "Woobat",
		pt: "Woobat",
		de: "Fleknoil"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wave Amplification",
				fr: "Amplification d'Onde",
				es: "Amplificación de Ondas",
				it: "Amplificazione Onde",
				pt: "Ampliação de Onda",
				de: "Wellenamplifikation"
			},
			effect: {
				en: "During your next turn, this Pokémon's Returning Echo attack does 60 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Écho de Retour de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, el ataque Eco Retorno de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, l'attacco Eco di Ritorno di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a sua próxima vez de jogar, o ataque Retorno do Eco deste Pokémon causará 60 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt die Attacke Widerhallendes Echo dieses Pokémon 60 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Returning Echo",
				fr: "Écho de Retour",
				es: "Eco Retorno",
				it: "Eco di Ritorno",
				pt: "Retorno do Eco",
				de: "Widerhallendes Echo"
			},
			effect: {
				en: "Flip a coin. If tails, return this Pokémon and all cards attached to it to your hand.",
				fr: "Lancez une pièce. Si c'est pile, reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
				es: "Lanza 1 moneda. Si sale cruz, devuelve este Pokémon y todas las cartas unidas a él a tu mano.",
				it: "Lancia una moneta. Se esce croce, riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
				pt: "Jogue uma moeda. Se sair coroa, devolva este Pokémon e todos os cards ligados a ele para a sua mão.",
				de: "Wirf 1 Münze. Bei \"Kopf\" nimm dieses Pokémon und alle daran angelegten Karten zurück auf deine Hand."
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



}

export default card
