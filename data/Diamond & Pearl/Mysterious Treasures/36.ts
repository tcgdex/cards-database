import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Toxicroak",
	},
	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		454,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Croagunk",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Poison Sacs",
			},
			effect: {
				en: "Your opponent can't remove the Special Condition Poisoned by evolving or devolving his or her Poisoned Pokémon. (This also includes putting a Pokémon Level-Up card onto the Poisoned Pokémon.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Knuckle Claws",
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
			value: "+20"
		},
	],





}

export default card
