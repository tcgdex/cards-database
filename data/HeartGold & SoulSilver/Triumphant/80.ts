import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Tentacool",
		fr: "Tentacool",
		de: "Tentacha"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [72],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Gentle Wrap",
				fr: "Enveloppe douce",
				de: "Sanfte Umarmung"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,

	description: {
		en: "It drifts aimlessly in waves. Very difficult to see in water, it may not be noticed until it stings."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89869,
				cardmarket: 279610
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89869,
				cardmarket: 279610
			},
		},
	],

}

export default card
