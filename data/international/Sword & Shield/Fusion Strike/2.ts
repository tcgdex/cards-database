import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [11],
	set: Set,

	name: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
		'es-es': "Metapod",
		'it-it': "Metapod",
		'pt-br': "Metapod",
		'de-de': "Safcon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan",
		'es-es': "Caterpie",
		'it-it': "Caterpie",
		'pt-br': "Caterpie",
		'de-de': "Raupy"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "Saya Tsuruta",

	description: {
		'en-us': "Even though it is encased in a sturdy shell, the body inside is tender. It can't withstand a harsh attack."
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Exoskeleton",
			'fr-fr': "Exosquelette",
			'de-de': "Exoskelett",
			'es-es': "Exosqueleto",
			'pt-br': "Exo-esqueleto",
			'it-it': "Esoscheletro"
		},

		effect: {
			'en-us': "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Diesem Pokémon werden durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'es-es': "Los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Este Pokémon recebe 20 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
			'it-it': "Questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'de-de': "Ramme",
			'es-es': "Apisonar",
			'pt-br': "Aríete",
			'it-it': "Carica"
		},

		damage: 10
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582030,
				tcgplayer: 253072
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582030,
				tcgplayer: 253072
			}
		},
	],
}

export default card
