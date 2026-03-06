import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Doduo",
		fr: "Doduo",
		de: "Dodu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		84,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Run Around",
				fr: "Courrir dans tous les sens",
				de: "Run Around"
			},
			effect: {
				en: "Switch Doduo with 1 of your Benched Pokémon.",
				fr: "Échangez Doduo avec 1 des Pokémon de votre Banc.",
				de: "Switch Doduo with 1 of your Benched Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Random Peck",
				fr: "Coup d'bec au pif",
				de: "Random Peck"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage plus 10 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				de: "Flip 2 coins. This attack does 10 damage plus more damage for each heads."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276238,
		tcgplayer: 84861
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
