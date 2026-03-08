import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
		de: "Bisasam"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		1,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sleep Poison",
				fr: "Poison dodo",
				de: "Sleep Poison"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep and Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Asleep and Poisoned."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Razor Leaf",
				fr: "Tranch'herbe",
				de: "Razor Leaf"
			},

			damage: 20
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276230,
		tcgplayer: 84029
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
