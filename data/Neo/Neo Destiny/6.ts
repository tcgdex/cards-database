import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Gengar",
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Haunter",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Deep Sleep",
			},
			effect: {
				en: "As long as any Dark Gengar are in play, a player flips 2 coins for each of his or her Pokémon that is Asleep at the end of each turn. If either of them is tails, that Pokémon is still Asleep. This power stops working if Dark Gengar is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Pull In",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, you may choose 1 of them and switch it with the Defending Pokémon (before doing damage or other effects of this attack). Either way, the Defending Pokémon is now Asleep.",
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
