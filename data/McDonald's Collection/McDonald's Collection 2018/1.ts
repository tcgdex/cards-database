import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		en: "Growlithe",
		de: "Fukano"
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
				de: "Bodycheck"
			},
			effect: {
				en: "This Pokémon does 20 damage to itself",
				de: "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
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

