import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bench Barrier",
				fr: "Barrière de Banc",
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon by attacks.",
				fr: "Évitez tous les dégâts infligés à vos Pokémon de Banc par des attaques.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Juggling",
				fr: "Jonglerie",
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "10×",

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

	thirdParty: {
		cardmarket: 288490,
		tcgplayer: 113710
	}
}

export default card
