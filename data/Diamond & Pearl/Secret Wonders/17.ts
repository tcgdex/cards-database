import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Roserade",
		fr: "Roserade",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		407,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Roselia",
		fr: "Roselia",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Poison",
				fr: "Poison dodo",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magical Leaf",
				fr: "Feuillemagik",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage and remove 3 damage counters from Roserade.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires. Retirez à Roserade 3 marqueurs de dégât.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
