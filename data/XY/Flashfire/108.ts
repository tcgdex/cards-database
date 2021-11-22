import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "M Charizard EX",
		fr: "M-Dracaufeu EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 230,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Charizard-EX",
		fr: "Dracaufeu-EX",
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Blaze",
				fr: "Feu Furieux",
			},
			effect: {
				en: "Discard the top 5 cards of your deck.",
				fr: "Défaussez les 5 cartes du dessus de votre deck."
			},
			damage: 300,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Feu Furieux",
			},
			effect: {
				fr: "Défaussez les 5 cartes du dessus de votre deck.",
			},
			damage: 300,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "EX"
}

export default card
