import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Pupitar",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		247,
	],
	hp: 60,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Larvitar",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Rock Tackle",
			},
			effect: {
				en: "Dark Pupitar does 10 damage to itself. Dark Pupitar can't use this attack during your next turn.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Explosive Evolution",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokémon. Don't apply Weakness and Resistance. Then, search your deck for an Evolution card named Dark Tyranitar and put it on Dark Pupitar. (This counts as evolving Dark Pupitar.) Shuffle your deck afterward.",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
