import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Wigglytuff",
		'fr-fr': "Grodoudou",
		'es-es': "Wigglytuff",
		'it-it': "Wigglytuff",
		'pt-br': "Wigglytuff",
		'de-de': "Knuddeluff"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 100,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
		'de-de': "Pummeluff"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Balloon Barrage",
				'fr-fr': "Barrage de Ballons",
				'es-es': "Bombardeo de Globos",
				'it-it': "Pioggiapalloni",
				'pt-br': "Barricada de Balões",
				'de-de': "Ballonbeschuss"
			},
			effect: {
				'en-us': "This attack does 20 damage times the amount of Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées à ce Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida a este Pokémon.",
				'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata a questo Pokémon.",
				'pt-br': "Esse ataque causa 20 de danos vezes a quantidade de Energia ligada a este Pokémon.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Energien zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fairy",
				"Fairy",
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
				'en-us': "This Pokémon does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 10 dégâts.",
				'es-es': "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 10 danni a se stesso.",
				'pt-br': "Este Pokémon causa 10 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Their fur feels so good that if two of them snuggle together, they won't want to be separated.",
	},

	thirdParty: {
		cardmarket: 281426,
		tcgplayer: 90602
	}
}

export default card
