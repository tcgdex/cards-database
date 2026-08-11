import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [850],
	set: Set,

	name: {
		'en-us': "Sizzlipede",
		'fr-fr': "Grillepattes",
		'es-es': "Sizzlipede",
		'it-it': "Sizzlipede",
		'pt-br': "Sizzlipede",
		'de-de': "Thermopod"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Heat Dive",
			'fr-fr': "Piqué Échauffant",
			'es-es': "Picado Ardiente",
			'it-it': "Picchiata Rovente",
			'pt-br': "Mergulho Aquecido",
			'de-de': "Hitziger Sturzflug"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It stores flammable gas in its body and uses it to generate heat. The yellow sections on its belly get particularly hot.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760666,
				tcgplayer: 542780
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760666,
				tcgplayer: 542780
			}
		},
	],

	illustrator: "Yukiko Baba",

}

export default card