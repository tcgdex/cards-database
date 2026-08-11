import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Crabominable",
		'fr-fr': "Crabominable",
		'es-es': "Crabominable",
		'it-it': "Crabominable",
		'pt-br': "Crabominable",
		'de-de': "Krawell"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		740,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Crabrawler",
		'fr-fr': "Crabagarre",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Solid Shell",
				'fr-fr': "Coquille Dure",
				'es-es': "Caparazón Sólido",
				'it-it': "Guscio Solido",
				'pt-br': "Carapaça Sólida",
				'de-de': "Solider Panzer"
			},
			effect: {
				'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Freezing Punch",
				'fr-fr': "Poing Gelant",
				'es-es': "Puño Congelado",
				'it-it': "Pugno Congelante",
				'pt-br': "Murro Congelante",
				'de-de': "Frostiger Boxhieb"
			},
			effect: {
				'en-us': "If this Pokémon has any Water Energy attached to it, this attack does 80 more damage.",
				'fr-fr': "Si de l’Énergie Water est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene alguna Energía Water unida a él, este ataque hace 80 puntos de daño más.",
				'it-it': "Se questo Pokémon ha delle Energie Water assegnate, questo attacco infligge 80 danni in più.",
				'pt-br': "Se este Pokémon tiver alguma Energia Water ligada a ele, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Water-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It stores coldness in its pincers and pummels its foes. It can even smash thick walls of ice to bits!",
	},

	thirdParty: {
		cardmarket: 408259,
		tcgplayer: 201157
	}
}

export default card
