import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
		es: "Pangoro",
		it: "Pangoro",
		pt: "Pangoro",
		de: "Pandagro"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [675],

	hp: 140,

	types: ["Darkness"],

	stage: "Stage1",

	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
		es: "Pancham",
		it: "Pancham",
		pt: "Pancham",
		de: "Pam-Pam"
	},

	attacks: [
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: {
				en: "Knocking Hammer",
			},
			effect: {
				en: "Discard the top card of your opponent's deck."
			},
			damage: 90,
		},
		{
			cost: ["Darkness", "Darkness", "Darkness", "Colorless"],
			name: {
				en: "Shakedown",
			},
			effect: {
				en: "Discard a random card from your opponent's hand."
			},
			damage: 150,
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670478,
				tcgplayer: 281505
			}
		}
	]
}

export default card

