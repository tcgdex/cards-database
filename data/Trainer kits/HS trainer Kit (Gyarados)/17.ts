import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		en: "Croconaw",
		fr: "Crocrodil",
	},

	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	dexId: [159],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Totodile",
		fr: "Kaiminus",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse vague",
			},
			damage: 30,
		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Bite",
				fr: "Grosse morsure",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
			},
			damage: 50,
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279102,
				tcgplayer: 84502,
			},
		},
	],

}

export default card
