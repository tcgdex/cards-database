import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [137],
	set: Set,

	name: {
		en: "Porygon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless"
			],
			name: {
				en: "Code Check",
			},
			effect: {
				en: "Look at 1 of your opponent's face-down Prize cards."
			},
		},
		{
			cost: [
				"Colorless"
			],
			name: {
				en: "Beam",
			},
			damage: 10,
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 1,

	illustrator: "Shin Nagasawa",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366780,
				tcgplayer: 180460
			}
		}
	]
}

export default card

