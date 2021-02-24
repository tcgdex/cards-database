import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Charizard",
	},
	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Burning Energy",
			},
			effect: {
				en: "Once during your turn (before you attack), you may turn all basic Energy attached to all of your Pokémon into Fire Energy for the rest of the turn. This power can't be used if Charizard is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Scorching Whirlwind",
			},
			effect: {
				en: "Flip 2 coins. If 1 of them is tails, discards 3 Energy cards attached to Charizard. If both of them are tails, discard all Energy cards attached to Charizard.",
			},
			damage: 120,

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
