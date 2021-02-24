import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Noivern BREAK",
		fr: "Bruyverne TURBO",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		715,
	],
	hp: 130,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Noivern",
		fr: "Bruyverne",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Synchro Woofer",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 80 more damage.",
			},
			damage: 70,

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				fr: "Fréquence Synchro",
			},
			effect: {
				fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: "70+",

		},
	],






}

export default card
