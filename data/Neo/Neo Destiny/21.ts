import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Ursaring",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		217,
	],
	hp: 60,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Teddiursa",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Provoke",
			},
			effect: {
				en: "Look at your opponent's hand. If he or she has any Baby Pokémon and/or Basic Pokémon there, you may put any number of them onto your opponent's Bench (as long as there's room). Then, your opponent looks at your hand. If you have any Baby Pokémon and/or Basic Pokémon there, your opponent may put any number of them onto your Bench (as long as there's room).",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Battle Frenzy",
			},
			effect: {
				en: "For each Pokémon in play (yours and your opponent's), flip a coin. For each heads, this attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance for this attack.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
