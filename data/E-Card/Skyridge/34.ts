import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Wigglytuff",
	},
	illustrator: "Hizuki Misono",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Jigglypuff",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Good Neighbor",
			},
			effect: {
				en: "Once during your turn (before you attack), if Wigglytuff is on your bench, you may flip a coin. If heads, each player removes up to 2 damage counters from his or her Active Pokémon. This power can't be used if you have already used another Wigglytuff's Good Neighbor Poké-Power this turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Do the Wave",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage times the number of Pokémon you have in play.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
