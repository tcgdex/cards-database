import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Dunsparce",
		de: "Dummisel"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		206,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Slippery Skin",
				de: "Glitschige Haut"
			},
			effect: {
				en: "As long as the Defending Pokémon is an Evolved Pokémon, Dunsparce's Retreat Cost is 0.",
				de: "Solange das verteidigende Pokémon ein entwickeltes Pokémon ist, betragen Dummisels Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Shake",
				de: "Schweifwedeln"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				de: "Das verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275311,
		tcgplayer: 85006
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
