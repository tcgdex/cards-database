import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Walrein",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		365,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Sealeo",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Freeze-up",
			},
			effect: {
				en: "Once during your turn, when you play Walrein from your hand to evolve 1 of your Pokémon, you may flip 2 coins. If both are heads, discard 1 of the Defending Pokémon and all cards attached to it. (This doesn't count as a Knocked Out Pokémon.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Bind",
			},
			effect: {
				en: "If your opponent doesn't discard a card from his or her hand, the Defending Pokémon is now Paralyzed.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+30"
		},
	],





}

export default card
