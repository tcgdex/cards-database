import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Ninetales",
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Vulpix",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Roast Reveal",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Fire Energy card from your hand. If you do, draw 3 cards. This power can't be used if Ninetales is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Will-o'-the-wisp",
			},

			damage: 60,

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
