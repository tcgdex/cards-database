import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Walrein",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		365,
	],
	hp: 120,
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
				en: "Crush Draw",
			},
			effect: {
				en: "Once during your turn (before your attack), you may reveal the top card of your deck. If that card is a basic Energy card, attach it to 1 of your Pokémon. If not, put the card back on your deck. This power can't be used if Walrein is affected by a Special Condition.",
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
				en: "Sheer Cold",
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon can't attack during your opponent's next turn.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
