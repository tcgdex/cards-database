import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [113],
	set: Set,

	name: {
		en: "Chansey"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless", "Colorless"
			],
			name: {
				en: "Bind Wound",
			},
			effect: {
				en: "Flip a coin. If heads, heal 30 damage from 1 of your Pokémon."
			},
		},
		{
			cost: [
				"Colorless", "Colorless", "Colorless", "Colorless"
			],
			name: {
				en: "Hammer In",
			},
			damage: 80,
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 2,

	illustrator: "Megumi Mizutani",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366778,
				tcgplayer: 180458
			}
		}
	]
}

export default card
