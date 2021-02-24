import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Walrein ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		365,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Sealeo",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Chilling Breath",
			},
			effect: {
				en: "Once during your turn, when you play Walrein ex from your hand to evolve 1 of your Pokémon, you may use this power. Your opponent can't play any Trainer cards from his or her hand during your opponent's next turn.",
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
				en: "Wreck",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 70 damage plus 20 more damage. Discard that Stadium card.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
