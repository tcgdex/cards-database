import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Carnivine",
		fr: "Vortente",
		de: "Venuflibis"
	},

	illustrator: "Satoshi Ohta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		455,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet lianes",
				de: "Rankenhieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Swallow",
				fr: "Avale",
				de: "Verschlucken"
			},
			effect: {
				en: "Flip a coin. If heads, remove from Carnivine the number of damage counters equal to the damage you did to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, retirez à Vortente autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Bei \"Kopf\" entferne Schadensmarken von Venuflibis entsprechend der Höhe der Schadenspunkte, die dem Verteidigenden Pokémon durch diesen Angriff zugefügt wurden."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278744
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
