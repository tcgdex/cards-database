import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Osselait",
		de: "Tragosso"
	},

	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [137],

	hp: 40,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Data Sort",
				fr: "Pichenette",
				de: "Verprügler"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],

			name: {
				en: "Peck",
				fr: "Éclate-os",
				de: "Knochenzertrümmerer"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},

			damage: 10,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84529,
				cardmarket: 274978
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
