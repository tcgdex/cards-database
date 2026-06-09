import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [104],
	set: Set,

	name: {
		en: "Cubone"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Leer",
			},
			effect: {
				en: "Flip a coin, If heas, your opponent's Active Pokémon is now Paralyzed"
			},
		},
		{
			cost: [
				"Colorless", "Colorless",
			],
			name: {
				en: "Headbutt",
			},
			damage: 20,
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 2,

	illustrator: "sui",	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366775,
				tcgplayer: 180455
			}
		}
	]
}

export default card

