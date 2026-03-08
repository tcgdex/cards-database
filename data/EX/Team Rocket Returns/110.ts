import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Charmeleon",
		de: "Glutexo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		5,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmander",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Smokescreen",
				de: "Smokescreen"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				de: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flip a coin. if tails, that attack does nothing."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fireworks",
				de: "Fireworks"
			},
			effect: {
				en: "Flip a coin. If tails, discard a Fire Energy card attached to Charmeleon.",
				de: "Flip a coin. If tails, discard a  Energy card attached to Charmeleon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276402,
		tcgplayer: 84227
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
