import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Regigigas",
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		486,
	],
	hp: 150,
	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sacrifice",
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose 1 of your Pokémon and that Pokémon is Knocked Out. Then, search your discard pile for up to 2 basic Energy cards, attach them to Regigigas, and remove 8 damage counters from Regigigas. This power can't be used if Regigigas is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Fighting",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Giga Blaster",
			},
			effect: {
				en: "Discard the top card from your opponent's deck. Then, choose 1 card from your opponent's hand without looking and discard it. Regigigas can't use Giga Blaster during your next turn.",
			},
			damage: 100,

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
