import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Omastar",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		139,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Omanyte",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Prehistoric Water",
			},
			effect: {
				en: "If your opponent has any evolved Pokémon in play, choose 1 of them and flip a coin. If heads, your opponent takes the highest Stage Evolution card on that Pokémon and shuffles it into his or her deck.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Dark Tentacle",
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't evolve except from effects of attacks or Pokémon Powers. (Benching that Pokémon ends this effect.)",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
