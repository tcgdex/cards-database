import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Skitty",
		fr: "Skitty",
		de: "Eneco"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		300,
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
				en: "Energy Catch",
				fr: "Attrape-énergie",
				de: "Energy Catch"
			},
			effect: {
				en: "Search your discard pile for a basic Energy card, show it to your opponent, and put it into your hand.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main.",
				de: "Search your discard pile for a basic Energy card, show it to your opponent, and put it into your hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès",
				de: "Double-Edge"
			},
			effect: {
				en: "Skitty does 10 damage to itself.",
				fr: "Skitty s'inflige 10 dégâts.",
				de: "Skitty does 10 damage to itself."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275856,
		tcgplayer: 89262
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"],
		}
	]
}

export default card
