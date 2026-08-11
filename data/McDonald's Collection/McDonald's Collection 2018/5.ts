import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [79],
	set: Set,

	name: {
		en: "Slowpoke"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
			},
			damage: 10,
		},
		{
			cost: [
				"Psychic", "Colorless", "Colorless",
			],
			name: {
				en: "Whimsy Tackle",
			},
			effect: {
				en: "Flip a coin. If tails this attack does nothing."
			},
			damage: 60
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],

	retreat: 3,

	illustrator: "Mina Nakai",	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366773,
				tcgplayer: 180453
			}
		}
	]
}

export default card

