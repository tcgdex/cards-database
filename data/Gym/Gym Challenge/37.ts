import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Brock's Vulpix",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hypnotic Gaze",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Ring",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	variants: {
		wPromo: true
	},

	thirdParty: {
		cardmarket: 274305,
		tcgplayer: 83986
	}
}

export default card
