import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Swadloon",
		fr: "Couverdure",
		es: "Swadloon",
		it: "Swadloon",
		pt: "Swadloon",
		de: "Folikon"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		541,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Sewaddle",
		fr: "Larveyette",
	},

	stage: "Stage1",

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
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bug Bite",
				fr: "Piqûre",
				es: "Picadura",
				it: "Coleomorso",
				pt: "Picada",
				de: "Käferbiss"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 387872
	}
}

export default card
