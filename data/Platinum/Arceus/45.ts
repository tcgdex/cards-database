import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Pelipper",
		de: "Pelipper"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
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
				"Colorless",
			],
			name: {
				en: "Water Ball",
				de: "Wasserball"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Water Energy attached to Pelipper.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Pelipper angelegte -Energie zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				de: "Flügelschlag"
			},

			damage: 60,

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

	description: {
		en: "It is a messenger of the skies, carrying small Pokémon and eggs to safety in its bill.",
	},

	thirdParty: {
		cardmarket: 278917,
		tcgplayer: 87979
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
