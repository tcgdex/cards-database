import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Alolan Graveler",
		fr: "Gravalanch d’Alola",
		es: "Graveler de Alola",
		it: "Graveler di Alola",
		pt: "Graveler de Alola",
		de: "Alola-Georok"
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		75,
	],
	hp: 100,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Alolan Geodude",
		fr: "Racaillou d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Corkscrew Punch",
				fr: "Poing Tire-Bouchon",
				es: "Puño Tirabuzón",
				it: "Pugno Rotante",
				pt: "Soco Saca-rolha",
				de: "Korkenzieherhieb"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Self-Destruct",
				fr: "Destruction",
				es: "Autodestrucción",
				it: "Autodistruzione",
				pt: "Autodestruição",
				de: "Finale"
			},
			effect: {
				en: "This Pokémon does 100 damage to itself.",
				fr: "Ce Pokémon s’inflige 100 dégâts.",
				es: "Este Pokémon se hace 100 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 100 danni a se stesso.",
				pt: "Este Pokémon causa 100 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 100 Schadenspunkte zu."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
