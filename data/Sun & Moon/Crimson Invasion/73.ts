import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Xerneas",
		fr: "Xerneas",
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		716,
	],
	hp: 130,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lead",
				fr: "Mentor",
			},
			effect: {
				en: "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Bright Horns",
				fr: "Cornes Lumineuses",
			},
			effect: {
				en: "This Pokémon can't use Bright Horns during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Cornes Lumineuses pendant votre prochain tour.",
			},
			damage: 130,

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
	retreat: 2,



}

export default card
