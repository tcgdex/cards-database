import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [54],
	set: Set,

	name: {
		en: "Psyduck",
		de: "Enton"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Confusion Wave",
				de: "Verwirrende Welle"
			},
			effect: {
				en: "Both Activate Pokémon are now Confused",
				de: "Beide Aktiven Pokémon sind jetzt verwirrt."
			},
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 2,

	illustrator: "Shibuzoh.",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366770,
				tcgplayer: 180451
			}
		}
	]
}

export default card

