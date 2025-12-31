import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Starmie",
		de: "Starmie"
	},

	illustrator: "CR CG gangs",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Staryu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Burst",
				de: "Energieausbruch"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage times the number of Energy cards attached to Starmie and the Defending Pokémon.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte mal der Anzahl an Energiekarten, die an Starmie und das Verteidigende Pokémon angelegt sind, zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Star Back",
				de: "Sternrückgewinnung"
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Pokémon.",
				de: "Lege eine Basis-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon an."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275254,
		tcgplayer: 89529
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
