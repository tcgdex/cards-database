import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Alolan Geodude",
		fr: "Racaillou d’Alola",
		es: "Geodude de Alola",
		it: "Geodude di Alola",
		pt: "Geodude de Alola",
		de: "Alola-Kleinstein"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		74,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
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
				en: "This Pokémon does 60 damage to itself.",
				fr: "Ce Pokémon s’inflige 60 dégâts.",
				es: "Este Pokémon se hace 60 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 60 danni a se stesso.",
				pt: "Este Pokémon causa 60 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 60 Schadenspunkte zu."
			},
			damage: 60,

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

	retreat: 2,

	thirdParty: {
		cardmarket: 368965
	}
}

export default card
