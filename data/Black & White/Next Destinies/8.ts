import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Foongus",
		fr: "Trompignon",
		es: "Foongus",
		it: "Foongus",
		pt: "Foongus",
		de: "Tarnpignon"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		590,
	],

	hp: 40,

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
				en: "Find a Friend",
				fr: "Trouver un Ami",
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Rising Lunge",
				fr: "Botte Secrète",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280233,
		tcgplayer: 85538
	}
}

export default card
