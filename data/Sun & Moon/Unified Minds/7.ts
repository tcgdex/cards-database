import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Sewaddle",
		fr: "Larveyette",
		es: "Sewaddle",
		it: "Sewaddle",
		pt: "Sewaddle",
		de: "Strawickl"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		540,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Swaddling Leaves",
				fr: "Feuillage Enveloppant",
				es: "Hojas Envolventes",
				it: "Fogliefascia",
				pt: "Enfaixar com Folhas",
				de: "Blätterwickel"
			},
			effect: {
				en: "This Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques hacen 10 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Questo Pokémon subisce 10 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Este Pokémon recebe 10 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Diesem Pokémon werden durch Attacken 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Surprise Attack",
				fr: "Attaque Surprise",
				es: "Ataque Sorpresa",
				it: "Attacco a Sorpresa",
				pt: "Ataque Surpresa",
				de: "Überraschungsangriff"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
