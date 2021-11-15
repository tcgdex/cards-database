import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Dodrio",
		fr: "Dodrio"
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		85,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Doduo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fast Feet",
				fr: "Fugafacile"
			},
			effect: {
				en: "Dodrio can retreat even when it is Asleep or Paralyzed.",
				fr: "Dodrio peut battre en retraite même s'il est Endormi ou Paralysé."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Retaliate",
				fr: "Représailles"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Dodrio.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Dodrio."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup déchirant"
			},
			effect: {
				en: "Flip a coin. If tails, Dodrio can't use Slashing Strike during your next turn.",
				fr: "Lancez une pièce. Si c'est pile, Dodrio ne peut pas utiliser Coup déchirant lors de votre prochain tour."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
