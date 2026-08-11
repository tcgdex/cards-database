import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Poliwag",
		'fr-fr': "Ptitard",
		'es-es': "Poliwag",
		'it-it': "Poliwag",
		'pt-br': "Poliwag",
		'de-de': "Quapsel"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		60,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revolver d’Água",
				'de-de': "Aquaknarre"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Pump",
				'fr-fr': "Hydrocanon",
				'es-es': "Hidrobomba",
				'it-it': "Idropompa",
				'pt-br': "Jato d’Água",
				'de-de': "Hydropumpe"
			},
			effect: {
				'en-us': "This attack does 10 more damage times the amount of Water Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada Energía Water unida a este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais vezes a quantidade de Energia Water ligada a este Pokémon.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Water-Energien zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It's still not very good at walking. Its Trainers should train this Pokémon to walk every day.",
	},

	thirdParty: {
		cardmarket: 295340,
		tcgplayer: 126901
	}
}

export default card
