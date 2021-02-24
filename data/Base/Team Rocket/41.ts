import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Muk",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grimer",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sticky Goo",
			},
			effect: {
				en: "As long as Dark Muk is your Active Pokémon, your opponent pays 2 more to retreat his or her Active Pokémon. This power stops working while Dark Muk is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sludge Punch",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
