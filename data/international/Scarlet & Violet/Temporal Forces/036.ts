import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [850],
	set: Set,

	name: {
		en: "Sizzlipede",
		fr: "Grillepattes",
		es: "Sizzlipede",
		it: "Sizzlipede",
		pt: "Sizzlipede",
		de: "Thermopod"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Heat Dive",
			fr: "Piqué Échauffant",
			es: "Picado Ardiente",
			it: "Picchiata Rovente",
			pt: "Mergulho Aquecido",
			de: "Hitziger Sturzflug"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
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
		en: "It stores flammable gas in its body and uses it to generate heat. The yellow sections on its belly get particularly hot.",
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