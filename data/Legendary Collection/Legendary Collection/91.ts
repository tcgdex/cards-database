import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Sandshrew"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [27],

	hp: 40,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Sand-attack"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "Burrow deep underground in arid locations far from water. It only emerges to hunt for food."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274856,
				tcgplayer: 88920
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88920,
				cardmarket: 274856
			}
		}
	],

}

export default card
