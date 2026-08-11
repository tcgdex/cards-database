import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "Almost incapable of moving, this Pokémon can only harden its shell to protect itself when it is in danger.",
	},

	name: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
		'es-es': "Kakuna",
		'es-mx': "Kakuna",
		'de-de': "Kokuna",
		'it-it': "Kakuna",
		'pt-br': "Kakuna"
	},

	illustrator: "Mugi Hamada",
	rarity: "Common",
	category: "Pokemon",
	dexId: [14],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Weedle"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Exoskeleton",
			'fr-fr': "Exosquelette",
			'es-es': "Exoesqueleto",
			'es-mx': "Exoesqueleto",
			'de-de': "Exoskelett",
			'it-it': "Esoscheletro",
			'pt-br': "Exoesqueleto"
		},

		effect: {
			'en-us': "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Este Pokémon recibe 20 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia).",
			'de-de': "Diesem Pokémon werden durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Hang Down",
			'fr-fr': "Suspension",
			'es-es': "Prender",
			'es-mx': "Colgadera",
			'de-de': "Herunterhängen",
			'it-it': "Tirar Giù",
			'pt-br': "Dependurar"
		},

		cost: ["Grass"],
		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886394,
				tcgplayer: 693502
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886394,
				tcgplayer: 693502
			}
		},
	],
}

export default card
