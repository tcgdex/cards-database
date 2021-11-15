import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Hariyama",
		fr: "Hariyama"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		297,
	],
	hp: 80,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Makuhita",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Shove",
				fr: "Bousculer"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slap Down",
				fr: "Écraser"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage plus 10 more damage for each heads.",
				fr: "Lancez deux pièces. Cette attaque inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque face."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
