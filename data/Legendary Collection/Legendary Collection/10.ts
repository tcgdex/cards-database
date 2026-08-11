import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Flareon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [136],

	hp: 70,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Eevee"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower"
			},
			effect: {
				en: "Discard 1 Fire Energy card attached to Flareon or this attack does nothing."
			},
			damage: 60,

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
		en: "When storing thermal energy in its body, its temperature could soar to over 1600 degrees."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274775,
				tcgplayer: 85492
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85492,
				cardmarket: 274775
			}
		}
	],

}

export default card
