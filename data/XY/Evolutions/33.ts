import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		es: "Magikarp",
		it: "Magikarp",
		pt: "Magikarp",
		de: "Karpador"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
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
				en: "Flail",
				fr: "Fléau",
				es: "Azote",
				it: "Flagello",
				pt: "Mangual",
				de: "Dreschflegel"
			},
			effect: {
				en: "This attack does 10 damage times the number of damage counters on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
				es: "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 10 danni per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 10 de danos vezes o número de contadores de danos neste Pokémon.",
				de: "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 293390
	}
}

export default card
