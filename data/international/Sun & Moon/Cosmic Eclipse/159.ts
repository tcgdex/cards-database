import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Drampa",
		'fr-fr': "Draïeul",
		'es-es': "Drampa",
		'it-it': "Drampa",
		'pt-br': "Drampa",
		'de-de': "Sen-Long"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		780,
	],

	hp: 120,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
				'es-es': "Garra Dragón",
				'it-it': "Dragartigli",
				'pt-br': "Garra de Dragão",
				'de-de': "Drachenklaue"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Arcana",
				'fr-fr': "Savoir Draconique",
				'es-es': "Arcano Draco",
				'it-it': "Dragomanzia",
				'pt-br': "Dragões Arcanos",
				'de-de': "Drachen-Arkana"
			},
			effect: {
				'en-us': "If this Pokémon has 2 or more different types of basic Energy attached to it, this attack does 70 more damage.",
				'fr-fr': "Si 2 types d’Énergie de base ou plus sont attachées à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene 2 o más tipos de Energía Básica diferentes unidas a él, este ataque hace 70 puntos de daño más.",
				'it-it': "Se questo Pokémon ha due o più Energie base di tipo diverso assegnate, questo attacco infligge 70 danni in più.",
				'pt-br': "Se este Pokémon tiver 2 ou mais tipos diferentes de Energia básica ligados a ele, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon mindestens 2 verschiedene Basis-Energietypen angelegt sind, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If a child it has made friends with is bullied, Drampa will find the bully's house and burn it to the ground.",
	},

	thirdParty: {
		cardmarket: 408424,
		tcgplayer: 201280
	}
}

export default card
