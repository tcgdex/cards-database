import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Dewgong",
		fr: "Lamantine",
		de: "Jugong"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		87,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Seel",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde Boréale",
				de: "Aurorastrahl"
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Beam",
				fr: "Laser Glace",
				de: "Ice Beam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 30,

		},
	],

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Il emmagasine la chaleur dans son corps. Il peut nager dans l'eau glacée à plus de 8 nœuds."
	},

	thirdParty: {
		cardmarket: 273720,
		tcgplayer: 42366
	},

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/030.ts"
		}
	]
}

export default card
