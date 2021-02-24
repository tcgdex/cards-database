import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		391,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Chimchar",
		fr: "Ouisticram",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Tail Slap",
				fr: "Coup de queue enflammé",
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy attached to Monferno.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Chimpenfeu.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Paralyzing Gaze",
				fr: "Regard paralysant",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],





}

export default card
