import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Porygon2",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		233,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Porygon",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Backup",
			},
			effect: {
				en: "Once during your turn (before your attack), if you have 2 or fewer cards in your hand, you may draw cards until you have exactly 3 cards in your hand. This power can't be used if Porygon2 is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypnotic Ray",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
