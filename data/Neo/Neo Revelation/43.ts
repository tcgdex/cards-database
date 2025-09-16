import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Farfetch'd",
		fr: "Canarticho",
		de: "Porenta"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		83,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				de: "Gust"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leek Jab",
				fr: "Coud'poireau",
				de: "Leek Jab"
			},
			effect: {
				en: "This attack can't be used during your next turn. (Benching Farfetch'd ends this effect.)",
				fr: "Cette attaque ne peut pas être utilisée à nouveau durant votre prochain tour. (Envoyer Canarticho sur le Banc met fin à cet effet.)",
				de: "This attack can´t be used during your next turn. (Benching Farfetch´d ends this effect.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Si quelqu'un tente de s'introduire dans son jardin de poireaux, il utilise son arme pour le faire partir."
	},

	thirdParty: {
		cardmarket: 274629,
		tcgplayer: 85382
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

