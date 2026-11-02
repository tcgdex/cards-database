import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [116],
	set: Set,

	name: {
		en: "Horsea",
		de: "Seeper"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Arrow",
				de: "Wasserpfeil"
			},
			effect: {
				en: "This attack does 10 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 1,

	illustrator: "Saya Tsuruta",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366771,
				tcgplayer: 180449
			}
		}
	]
}

export default card

