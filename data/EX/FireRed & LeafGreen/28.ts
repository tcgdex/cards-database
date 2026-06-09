import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Primeape",
		fr: "Colossinge",
		de: "Rasaff"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Toss",
				fr: "Pile ou face",
				de: "Toss"
			},
			effect: {
				en: "You may discard from your hand as many Technical Machine and Pokémon Tool cards as you like. This attack does 30 damage times the number of cards you discarded.",
				fr: "Vous pouvez défausser de votre main autant de cartes Machine technique et Outil Pokémon que vous voulez. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes défaussées.",
				de: "You may discard from your hand as many Technical Machine and Pokémon Tool cards as you like. This attack does 30 damage times the number of cards you discarded."
			},
			damage: "30x",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
				de: "Low Kick"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276204,
		tcgplayer: 88362
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
