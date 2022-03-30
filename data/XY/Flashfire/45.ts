import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Geodude",
		fr: "Racaillou",
		es: "Geodude",
		it: "Geodude",
		pt: "Geodude",
		de: "Kleinstein"
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		74,
	],
	hp: 60,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				es: "Desenrollar",
				it: "Rotolamento",
				pt: "Rolagem",
				de: "Walzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
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
				de: "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
