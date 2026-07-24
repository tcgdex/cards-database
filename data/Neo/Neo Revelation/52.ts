import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Skiploom",
		fr: "Floravol",
		de: "Hubelupf"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		188,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Hoppip",
		fr: "Granivol"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hop",
				fr: "Hop",
				de: "Hüpfer"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Mysterious Powder",
				fr: "Poudre mystérieuse",
				de: "Seltsames Puder"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt verwirrt."
			},
			damage: 10,

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
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		en: "It spreads its petals to absorb sunlight. It also floats in the air to get closer to the sun.",
		fr: "Il écarte ses pétales pour absorber la lumière du soleil. Il flotte aussi dans les airs pour se rapprocher de l'astre du jour."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274638,
				tcgplayer: 89253
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274638,
				tcgplayer: 89253
			}
		}
	]
}

export default card

