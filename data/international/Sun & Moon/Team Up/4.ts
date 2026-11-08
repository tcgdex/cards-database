import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
		'es-es': "Kakuna",
		'it-it': "Kakuna",
		'pt-br': "Kakuna",
		'de-de': "Kokuna"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		14,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Grass Cushion",
				'fr-fr': "Coussin Plante",
				'es-es': "Cojín Planta",
				'it-it': "Cuscino d’Erba",
				'pt-br': "Almofada de Planta",
				'de-de': "Pflanzenpolster"
			},
			effect: {
				'en-us': "If this Pokémon has any Grass Energy attached to it, it takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Si de l’Énergie Grass est attachée à ce Pokémon, il subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Si este Pokémon tiene alguna Energía Grass unida a él, los ataques le hacen 30 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
				'it-it': "Se questo Pokémon ha delle Energie Grass assegnate, subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Se este Pokémon tiver alguma Energia Grass ligada a ele, receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Grass-Energie angelegt ist, werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				'en-us': "Bug Bite",
				'fr-fr': "Piqûre",
				'es-es': "Picadura",
				'it-it': "Coleomorso",
				'pt-br': "Picada",
				'de-de': "Käferbiss"
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

	retreat: 3,

	description: {
		'en-us': "Almost incapable of moving, this Pokémon can only harden its shell to protect itself when it is in danger.",
	},

	thirdParty: {
		cardmarket: 368937,
		tcgplayer: 183775
	}
}

export default card
