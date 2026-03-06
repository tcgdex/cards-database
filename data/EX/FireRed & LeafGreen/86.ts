import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Weedle",
		fr: "Aspicot",
		de: "Hornliu"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		13,
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
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Call for Family"
			},
			effect: {
				en: "Search your deck for up to 2 Grass Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base  et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Search your deck for up to 2  Basic Pokémon and put them onto your bench. Suffle your deck afterward."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Spurt",
				fr: "Jet de poison",
				de: "Poison Spurt"
			},
			effect: {
				en: "Discard a Grass Energy card attached to Weedle. The Defending Pokémon is now Poisoned.",
				fr: "Défaussez une carte Énergie  attachée à Aspicot. Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Discard a  Energy Card attached to Weedle. The Defending Pokémon is now Poisoned."
			},

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
		cardmarket: 276262,
		tcgplayer: 90542
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
