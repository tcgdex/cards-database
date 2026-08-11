import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [264],

	name: {
		'en-us': "Galarian Linoone",
		'fr-fr': "Linéon de Galar",
		'es-es': "Linoone de Galar",
		'it-it': "Linoone di Galar",
		'pt-br': "Linoone de Galar",
		'de-de': "Galar-Geradaks"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Galarian Zigzagoon",
		'fr-fr': "Zigzaton de Galar"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-Edge",
				'fr-fr': "Damoclès",
				'es-es': "Doble Filo",
				'it-it': "Sdoppiatore",
				'pt-br': "Faca de Dois Gumes",
				'de-de': "Risikotackle"
			},
			effect: {
				'en-us': "This Pokémon also does 20 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
				'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
			},
			damage: 60,

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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		'en-us': "It uses its long tongue to taunt opponents. Once the opposition is enraged, this Pokémon hurls itself at the opponent, tackling them forcefully."
	},

	thirdParty: {
		cardmarket: 500035,
		tcgplayer: 223036
	}
}

export default card
