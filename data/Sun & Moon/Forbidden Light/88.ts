import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Dedenne",
		fr: "Dedenne",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		702,
	],
	hp: 60,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Find a Friend",
				fr: "Trouver un Ami",
			},
			effect: {
				en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electrichain",
				fr: "Électrichaîne",
			},
			effect: {
				en: "If you have any Lightning Pokémon on your Bench, this attack does 30 more damage.",
				fr: "Si vous avez un Pokémon Lightning sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
