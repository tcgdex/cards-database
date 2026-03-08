import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Lairon",
		fr: "Galegon",
		de: "Stollrak"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		305,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Aron",
		fr: "Galekid"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rest",
				fr: "Repos",
				de: "Ruhe"
			},
			effect: {
				en: "Remove all Special Conditions and 5 damage counters (all if there are less than 5) from Lairon. Lairon is now Asleep.",
				fr: "Retirez à Galegon tous ses États Spéciaux et 5 marqueurs de dégât (tous s'il en a moins de 5). Galegon est maintenant Endormi.",
				de: "Entferne alle Speziellen Zustände und 5 Schadensmarken von Stollrak (entferne alle, wenn weniger als 5 auf Stollrak liegen). Stollrak schläft jetzt."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage",
				de: "Bodyslam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276915,
		tcgplayer: 86576
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
