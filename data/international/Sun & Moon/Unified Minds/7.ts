import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Sewaddle",
		'fr-fr': "Larveyette",
		'es-es': "Sewaddle",
		'it-it': "Sewaddle",
		'pt-br': "Sewaddle",
		'de-de': "Strawickl"
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
				'en-us': "Swaddling Leaves",
				'fr-fr': "Feuillage Enveloppant",
				'es-es': "Hojas Envolventes",
				'it-it': "Fogliefascia",
				'pt-br': "Enfaixar com Folhas",
				'de-de': "Blätterwickel"
			},
			effect: {
				'en-us': "This Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques hacen 10 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Questo Pokémon subisce 10 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Este Pokémon recebe 10 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Diesem Pokémon werden durch Attacken 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Surprise Attack",
				'fr-fr': "Attaque Surprise",
				'es-es': "Ataque Sorpresa",
				'it-it': "Attacco a Sorpresa",
				'pt-br': "Ataque Surpresa",
				'de-de': "Überraschungsangriff"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
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

	description: {
		'en-us': "This Pokémon makes clothes for itself. It chews up leaves and sews them with sticky thread extruded from its mouth.",
	},

	thirdParty: {
		cardmarket: 387862,
		tcgplayer: 194923
	}
}

export default card
