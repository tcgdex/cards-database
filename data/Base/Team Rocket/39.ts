import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Kadabra",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		64,
	],
	hp: 50,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Abra",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Matter Exchange",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a card from your hand in order to draw a card. This power can't be used if Dark Kadabra is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Mind Shock",
			},
			effect: {
				en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
