import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Greedent",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Skwovet",
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scrape Off",
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tools from your opponent’s Active Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smack and Run",
			},
			effect: {
				en: "Put this Pokémon and all attached cards into your hand.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
