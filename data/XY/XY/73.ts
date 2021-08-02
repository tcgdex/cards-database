import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Zoroark",
		fr: "Zoroark",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		571,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Corner",
				fr: "Coinçage",
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Night Claw",
				fr: "Griffe Nocturne",
			},
			effect: {
				en: "Flip a coin. If tails, discard 2 Energy attached to this Pokémon.",
				fr: "Lancez une pièce. Si c’est pile, défaussez 2 Énergies attachées à ce Pokémon.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
