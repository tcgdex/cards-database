import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Feebas",
		fr: "Barpau",
		es: "Feebas",
		it: "Feebas",
		pt: "Feebas",
		de: "Barschwa"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		349,
	],

	hp: 30,

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
				en: "Float On",
				fr: "Flottaison",
				es: "Flotar",
				it: "Galleggio",
				pt: "Flutuar",
				de: "Umhertreiben"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 10 dégâts.",
				es: "Lanza 1 moneda. Si sale cruz, este Pokémon se hace 10 puntos de daño a sí mismo.",
				it: "Lancia una moneta. Se esce croce, questo Pokémon infligge 10 danni a se stesso.",
				pt: "Jogue uma moeda. Se sair coroa, o Pokémon causará 10 de danos a ele mesmo.",
				de: "Wirf 1 Münze. Bei \"Zahl\" fügt sich dieses Pokémon selbst 10 Schadenspunkte zu."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 273574
	}
}

export default card
