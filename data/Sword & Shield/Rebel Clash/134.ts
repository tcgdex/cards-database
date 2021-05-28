import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Doublade",
		fr: "Dimoclès"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale"
	},

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche"
			},

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Double Slash",
				fr: "Double Lame"
			},
			effect: {
				en: "Flip 2 coins. This attack does 80 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque côté face."
			},
			damage: "80×",

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
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 90,
	types: ["Metal"],
	regulationMark: "D"
}

export default card
