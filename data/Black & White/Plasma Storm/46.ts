import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnézone",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		462,
	],
	hp: 140,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magneton",
		fr: "Magnéton",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dual Brains",
				fr: "Double Cerveau",
			},
			effect: {
				en: "During your turn, you may play 2 Supporter cards.",
				fr: "Pendant votre tour, vous pouvez jouer 2 cartes Supporter.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Gyro Ball",
				fr: "Gyroballe",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc. Ensuite, votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
