import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Liepard",
		fr: "Léopardus",
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		510,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Purrloin",
		fr: "Chacripan",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
			},

			damage: 40,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadow Scratch",
				fr: "Griffure Ténébreuse",
			},
			effect: {
				en: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			},
			damage: 90,

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
