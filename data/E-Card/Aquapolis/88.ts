import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
		de: "Kangama"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [115],

	hp: 70,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Baby Outing",
				fr: "Sortie de bébé",
				de: "Baby-Ausflug"
			},
			effect: {
				en: "Look at the top 3 cards of your deck, and then choose 1 of those cards and put it into your hand. Shuffle the rest into your deck afterward.",
				fr: "Regardez les 3 cartes du dessus de votre deck, choisissez l'une de ces cartes et ajoutez-la à votre main. Mélangez ensuite le reste à votre deck.",
				de: "Schaue dir die obersten 3 Karten deines Decks an und wähle 1 davon aus, die du auf deine Hand nimmst. Mische danach die anderen Karten in dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Punch",
				fr: "Ultimapoing",
				de: "Megahieb"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86420,
				cardmarket: 275162
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86420,
				cardmarket: 275162
			}
		},
	]
}

export default card
