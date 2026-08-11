import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [491],

	name: {
		'en-us': "Darkrai",
		'fr-fr': "Darkrai",
		'es-es': "Darkrai",
		'it-it': "Darkrai",
		'pt-br': "Darkrai",
		'de-de': "Darkrai"
	},

	illustrator: "nagimiso",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Darkness",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Darkness Guard",
				'fr-fr': "Parade Obscure",
				'es-es': "Defensa Oscuridad",
				'it-it': "Guardia dell'Oscurità",
				'pt-br': "Guarda Sombria",
				'de-de': "Finsterschutz"
			},
			effect: {
				'en-us': "If this Pokémon has any Darkness Energy attached, it takes 20 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Si de l'Énergie Darkness est attachée à ce Pokémon, il subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Si este Pokémon tiene alguna Energía Darkness unida a él, los ataques le hacen 20 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
				'it-it': "Se questo Pokémon ha delle Energie Darkness assegnate, subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Se este Pokémon tiver alguma Energia Darkness ligada a ele, receberá 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Darkness-Energie angelegt ist, werden ihm durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Vortex of Darkness",
				'fr-fr': "Vortex Obscur",
				'es-es': "Vórtice de Oscuridad",
				'it-it': "Vortice Oscuro",
				'pt-br': "Vórtice das Sombras",
				'de-de': "Wirbel der Finsternis"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each Darkness Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Darkness attachée à ce Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Darkness unida a este Pokémon.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Darkness assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia Darkness ligada a este Pokémon.",
				'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Darkness-Energie 20 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It can lull people to sleep and make them dream. It is active during nights of the new moon."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483404,
				tcgplayer: 219409
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483404,
				tcgplayer: 219409
			}
		},
	],
}

export default card
