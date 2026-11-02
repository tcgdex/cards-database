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
				de: "Windstoß"
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
				de: "Lauchschlag"
			},
			effect: {
				en: "This attack can't be used during your next turn. (Benching Farfetch'd ends this effect.)",
				fr: "Cette attaque ne peut pas être utilisée à nouveau durant votre prochain tour. (Envoyer Canarticho sur le Banc met fin à cet effet.)",
				de: "Dieser Angriff kann in deinem nächsten Zug nicht verwendet werden. (Wenn Porenta auf die Bank kommt, endet dieser Effekt.)"
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
	retreat: 1,


	description: {
		en: "If anyone tries to disturb where the essential plant sticks grow, it uses its own stick to thwart them.",
		fr: "Si quelqu'un tente de s'introduire dans son jardin de poireaux, il utilise son arme pour le faire partir.",
		de: "Es verhaut alle, die versuchen, durch Lauchfelder zu spazieren, mit seiner eigenen Lauchstange."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274629,
				tcgplayer: 85382
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274629,
				tcgplayer: 85382
			}
		}
	]
}

export default card

