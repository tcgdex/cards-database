import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
		'es-es': "Shelgon",
		'it-it': "Shelgon",
		'pt-br': "Shelgon",
		'de-de': "Draschel"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		372,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Bagon",
		'fr-fr': "Draby",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Energy Guard",
				'fr-fr': "Conservateur d’Énergie",
				'es-es': "Guardia Energía",
				'it-it': "Guardia di Energia",
				'pt-br': "Proteção de Energia",
				'de-de': "Energiewächter"
			},
			effect: {
				'en-us': "If this Pokémon has any basic Energy attached to it, it takes 20 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Si de l’Énergie de base est attachée à ce Pokémon, il subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Si este Pokémon tiene alguna Energía Básica unida a él, los ataques le hacen 20 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
				'it-it': "Se questo Pokémon ha delle Energie base assegnate, subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Se este Pokémon tiver alguma Energia básica ligada a ele, receberá 20 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Basis-Energie angelegt ist, werden diesem Pokémon durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'es-es': "Desenrollar",
				'it-it': "Rotolamento",
				'pt-br': "Rolagem",
				'de-de': "Walzer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They lurk deep within caves—motionless, neither eating nor drinking. Why they don't die is not known.",
	},

	thirdParty: {
		cardmarket: 363514,
		tcgplayer: 175469
	}
}

export default card
