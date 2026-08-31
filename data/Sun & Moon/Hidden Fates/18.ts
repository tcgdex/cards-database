import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Vaporeon",
		fr: "Aquali",
		de: "Aquana"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Aquaknarre"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Bubble Drain",
				fr: "Vide Bulle",
				de: "Blasengully"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Clean, clear waters are its usual habitat. When it's about to be attacked by an invading enemy, it dives into the water to hide.",
		de: "Es lebt meist an klaren Gewässern. Wittert es einen feindlichen Angriff, verschwindet es ins Wasser und macht sich unsichtbar."
	},

	thirdParty: {
		cardmarket: 396607,
		tcgplayer: 197662
	}
}

export default card
