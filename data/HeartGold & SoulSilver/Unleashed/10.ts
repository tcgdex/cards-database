import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Torterra",
		fr: "Torterra",
		de: "Chelterrar"
	},

	illustrator: "match",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		389,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grotle",
		fr: "Boskara",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Drain",
				fr: "Giga-sangsue",
				de: "Gigasauger"
			},
			effect: {
				en: "Remove from Torterra the number of damage counters equal to the damage you did to the Defending Pokémon.",
				fr: "Retirez de Torterra un nombre de marqueurs de dégât équivalant aux dégâts que vous avez infligés au Pokémon Défenseur.",
				de: "Entferne Schadensmarken von Chelterrar entsprechend der Höhe der Schadenspunkte, die dem Verteidigenden Pokémon durch diesen Angriff zugefügt wurden."
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Land Crush",
				fr: "Écras’terre",
				de: "Schollenbrecher"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		en: "Ancient people imagined that beneath the ground, a gigantic Torterra dwelled."
	},

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
