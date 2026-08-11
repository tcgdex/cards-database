import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Kakuna",
		de: "Kokuna"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [14],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Weedle",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Exoskeleton",
				de: "Exoskelett"
			},
			effect: {
				en: "All damage by attacks to Kakuna is reduced by 10 (after applying Weakness and Resistance).",
				de: "Jeder Schaden, der Kokuna durch Angriffe zugefügt wird, wird um 10 reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],

			name: {
				en: "Poisonpowder",
				de: "Giftpulver"
			},

			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				de: "Das verteidigende Pokémon ist jetzt vergiftet."
			}
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86410,
				cardmarket: 275328
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86410,
				cardmarket: 275328
			},
		},
	],
}

export default card
