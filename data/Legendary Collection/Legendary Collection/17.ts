import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Ninetales"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [38],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Vulpix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lure"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Blast"
			},
			effect: {
				en: "Discard 1 Fire Energy card attached to Ninetales or this attack does nothing."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274782,
				tcgplayer: 87764
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87764,
				cardmarket: 274782
			}
		}
	],

}

export default card
