import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Espeon",
		de: "Psiana"
	},
	illustrator: "match",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Solar Suggestion",
				de: "Sonnen-Andeutung"
			},
			effect: {
				en: "Move up to 4 damage counters from any of your Pokémon to any of your opponent's Pokémon in any way you like.",
				de: "Verschiebe bis zu 4 Schadensmarken von beliebigen deiner Pokémon in beliebiger Verteilung auf die gegnerischen Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psybeam",
				de: "Psystrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
