import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Ribombee",
		fr: "Rubombelle",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		743,
	],
	hp: 60,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Cutiefly",
		fr: "Bombydou",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mysterious Buzz",
				fr: "Bourdonnement Mystérieux",
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to your Fairy Pokémon in play.",
				fr: "Tant que ce Pokémon est sur votre Banc, chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets que cette carte peut infliger à vos Pokémon Fairy en jeu.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Stampede",
				fr: "Ruée",
			},

			damage: 20,

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




}

export default card
