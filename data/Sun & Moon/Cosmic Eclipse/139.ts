import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix",
	},
	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		208,
	],
	hp: 170,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Onix",
		fr: "Onix",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thumping Fall",
				fr: "Chute Sourde",
			},
			effect: {
				en: "Discard any number of Pokémon with a Retreat Cost of exactly 4 from your hand. This attack does 50 damage for each card you discarded in this way.",
				fr: "Défaussez autant de Pokémon qui ont un Coût de Retraite de 4 que vous le voulez de votre main. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
			},
			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Tail",
				fr: "Queue de Fer",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 100 damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 100 dégâts pour chaque côté face.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
