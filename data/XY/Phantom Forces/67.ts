import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Florges EX",
		fr: "Florges EX",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		671,
	],

	hp: 160,

	types: [
		"Fairy",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Lead",
				fr: "Mentor",
			},
			effect: {
				en: "Search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Bright Garden",
				fr: "Jardin Radieux",
			},
			effect: {
				en: "This attack does 20 damage times the number of Grass Pokémon and Fairy Pokémon you have in play.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon Grass et de Pokémon Fairy que vous avez en jeu.",
			},
			damage: "20×",

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
	stage: "Basic"
}

export default card
