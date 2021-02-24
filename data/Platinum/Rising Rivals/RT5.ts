import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Wash Rotom",
		fr: "Motisma Lavage Niv. 46",
	},
	illustrator: "Hiroki Fuchino",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		479,
	],
	hp: 90,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Wash Shift",
				fr: "Mutation lavage",
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. Wash Rotom's type is Water until the end of your turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Motisma Lavage est de type Water jusqu'à la fin de votre tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cleanse Away",
				fr: "Grand nettoyage",
			},
			effect: {
				en: "Remove 3 damage counters from each of your Benched Pokémon.",
				fr: "Retirez à chacun de vos Pokémon de Banc 3 marqueurs de dégât.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Drain Wash",
				fr: "Jet d'O éliminatoire",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, choose 1 card from your opponent's hand without looking and discard it.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
