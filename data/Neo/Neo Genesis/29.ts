import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Bayleef",
		fr: "Macronium",
		de: "Lorblatt"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		153,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Chikorita",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sweet Scent",
				fr: "Doux parfum",
				de: "Sweet Scent"
			},
			effect: {
				en: "Flip a coin. If heads and if any of your Pokémon have any damage counters on them, then remove 2 damage counters from 1 of them (or 1 if it only has 1). If tails and if any of your opponent's Pokémon have any damage counters on them, choose 1 of them and remove 2 damage counters from it (or 1 if it only has 1).",
				fr: "Lancez une pièce. Si c'est face et si l'un de vos Pokémon a des marqueurs de dégâts sur lui, retirez 2 marqueurs de dégâts de ce Pokémon (ou 1 s'il en possède seulement 1). Si c'est pile et si l'un des Pokémon de votre adversaire a des marqueurs de dégâts sur lui, retirez 2 marqueurs de dégâts de ce Pokémon (ou 1 s'il en possède seulement 1).",
				de: "Flip a coin. If heads and if any of your Pokémon have any damage counters on them, then remove 2 damage counters from 1 of them (or 1 if it only has 1). If tails and if any of your opponent's Pokémon have any damage counters in them, choose 1 of them and remove 2 damage counters from it (or 1 of it only has 1)."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Double Razor Leaf",
				fr: "Double tranch'herb",
				de: "Double Razor Leaf"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				de: "Flip 2 coins. This attack does 40 damage times the number of heads."
			},
			damage: "40x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Un parfum d'épices vient de son tour de cou. D'une certaine façon, cela vous donne envie de combattre."
	}
}

export default card
