import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Houndoom",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		229,
	],
	hp: 60,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Houndour",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Eerie Howl",
			},
			effect: {
				en: "If your opponent's Bench isn't full, look at his or her hand. If your opponent has any Baby Pokémon or Basic Pokémon there, choose 1 of them and put it on his or her Bench. Then, switch it with the Defending Pokémon.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Dark Fire",
			},
			effect: {
				en: "If there are any Energy cards attached to Dark Houndoom, discard 1 of them and this attack does 30 damage plus 20 more damage (plus 10 more damage for the Energy you discarded). If there aren't any, this attack does 30 damage.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
