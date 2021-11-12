import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Persian δ",
		fr: "Persian δ ESPÈCES DELTA"
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		53,
	],
	hp: 70,
	types: [
		"Darkness",
		"Metal",
	],
	evolveFrom: {
		en: "Meowth",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Scratch and Draw",
				fr: "Griffer et piocher"
			},
			effect: {
				en: "If any Stadium card with Holon in its name is in play, draw 3 cards.",
				fr: "Si une carte Stade dont le nom comporte Holon est en jeu, piochez 3 cartes."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Deceive",
				fr: "Trahison"
			},
			effect: {
				en: "Your opponent chooses 1 of his or her Pokémon. Put 4 damage counters on that Pokémon.",
				fr: "Votre adversaire choisit 1 de ses Pokémon. Placez 4 marqueurs de dégât sur ce Pokémon."
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
