import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		en: "Growlithe"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fire", "Colorless", "Colorless",
			],
			name: {
				en: "Take Down",
			},
			effect: {
				en: "This Pokémon does 20 damage to itself"
			},
			damage: 60,
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],

	retreat: 2,

	illustrator: "MAHOU",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366769,
				tcgplayer: 180450
			}
		}
	]
}

export default card
