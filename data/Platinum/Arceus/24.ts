import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Pelipper",
		de: "Pelipper"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		279,
	],
	
	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wingull",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Pulse",
				de: "Aquawelle"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Crush",
				de: "Dauerzermalmer"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, discard an Energy card attached to the Defending Pokémon.",
				de: "Wirf solange 1 Münze bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Lege pro \"Kopf\" eine an das Verteidigende Pokémon angelegt Energiekarte auf den Ablagestapel deines Gegners."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278896,
		tcgplayer: 87978
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
