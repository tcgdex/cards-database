import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Sandslash",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		28,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Sandshrew",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spike Armor",
			},
			effect: {
				en: "During your opponent's next turn, if Sandslash is damaged by an opponent's attack (even if Sandslash is Knocked Out), put 4 damage counters on the Attacking Pokémon.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Poison Spike",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, that Pokémon is now Poisoned.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],




}

export default card
